<?php
/**
 * Izvoz javnog kataloga iz veleprodaje (WooCommerce) za proxy1.hr.
 *
 * Pokrece se na posluzitelju: `sudo -u ploi wp eval-file katalog-izvoz.php`.
 * Ispisuje JSON na stdout. NAMJERNO bez cijena, rabata i zaliha: javni
 * katalog je prezentacija, cijene vide samo ovlasteni kupci u webshopu.
 *
 * Uz JSON se ispisuje i popis putanja slika (redak "@SLIKA putanja"), da ih
 * pozivatelj moze zapakirati i prenijeti.
 */

$ids = wc_get_products( array(
    'status' => 'publish',
    'limit'  => -1,
    'return' => 'ids',
    'orderby' => 'title',
    'order'  => 'ASC',
) );

$out    = array( 'izvezeno' => wp_date( 'c' ), 'kategorije' => array(), 'artikli' => array() );
$slike  = array();
$upload = wp_get_upload_dir();

$kat = static function ( $term ) {
    return array(
        'id'     => (int) $term->term_id,
        // "Otir" je ERP naziv skupine otiraca; kupcu se pokazuje puni naziv.
        'naziv'  => 'Otir' === $term->name ? 'Otirači' : preg_replace( '/^[\s\-–—,;.:\/]+|[\s\-–—,;.:\/]+$/u', '', $term->name ),
        'slug'   => $term->slug,
        'parent' => (int) $term->parent,
        'opis'   => wp_strip_all_tags( $term->description ),
    );
};

foreach ( get_terms( array( 'taxonomy' => 'product_cat', 'hide_empty' => true ) ) as $t ) {
    $row = $kat( $t );
    $tid = (int) get_term_meta( $t->term_id, 'thumbnail_id', true );
    if ( $tid ) {
        $f = get_attached_file( $tid );
        if ( $f && file_exists( $f ) ) {
            $row['slika'] = basename( $f );
            $slike[]      = $f;
        }
    }
    $out['kategorije'][] = $row;
}

foreach ( $ids as $id ) {
    $p = wc_get_product( $id );
    if ( ! $p || ! $p->is_visible() ) {
        continue;
    }
    $cats = wp_get_post_terms( $id, 'product_cat', array( 'fields' => 'ids' ) );

    $img = '';
    $tid = $p->get_image_id();
    if ( $tid ) {
        $f = get_attached_file( $tid );
        if ( $f && file_exists( $f ) ) {
            $img     = basename( $f );
            $slike[] = $f;
        }
    }
    $opis = trim( preg_replace( '/\s+/u', ' ', wp_strip_all_tags( $p->get_description() ?: $p->get_short_description() ) ) );

    $out['artikli'][] = array(
        'id'       => $id,
        'naziv'    => $p->get_name(),
        'slug'     => $p->get_slug(),
        'sifra'    => $p->get_sku(),
        'kategorije' => array_map( 'intval', $cats ),
        'jm'       => (string) get_post_meta( $id, '_kiserp_jm', true ),
        'pakiranje'=> (int) get_post_meta( $id, '_kiserp_pak', true ),
        'barkod'   => (string) get_post_meta( $id, '_kiserp_bar_kod', true ),
        'opis'     => $opis,
        'slika'    => $img,
    );
}

echo wp_json_encode( $out, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES ), "\n";
foreach ( array_unique( $slike ) as $f ) {
    echo '@SLIKA ', $f, "\n";
}
