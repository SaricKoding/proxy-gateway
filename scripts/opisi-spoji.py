"""
Spaja opise artikala (katalog-izvor/opisi/izlaz-*.json) u content/opisi-artikala.json.

Opise su pisali agenti iz naziva, skupine i pakiranja. Dio njih je dopunjen
opcenitim recenicama koje se ponavljaju na desetinama artikala; takav
ponovljeni tekst trazilicama vrijedi manje od kraceg jedinstvenog opisa, pa se
recenica koja se pojavljuje 12 ili vise puta izbacuje (osim one o pakiranju).

Pokretanje: python -I scripts/opisi-spoji.py
"""
import collections
import glob
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'katalog-izvor', 'opisi')
DST = os.path.join(ROOT, 'content', 'opisi-artikala.json')

opisi = {}
for f in sorted(glob.glob(os.path.join(SRC, 'izlaz-*.json'))):
    opisi.update(json.load(open(f, encoding='utf-8')))

recenice = lambda t: [r.strip() for r in re.split(r'(?<=[.])\s+', t) if r.strip()]
broj = collections.Counter(r for t in opisi.values() for r in recenice(t))
pakiranje = re.compile(r'^(Isporučuje se|Naručuje se|Prodaje se|Dolazi)\b')

out, duljine = {}, []
for k, t in opisi.items():
    rr = [r for r in recenice(t) if broj[r] < 12 or pakiranje.match(r)]
    tekst = ' '.join(rr)
    out[str(k)] = tekst
    duljine.append(len(tekst.split()))

json.dump(out, open(DST, 'w', encoding='utf-8'), ensure_ascii=False, indent=1, sort_keys=True)
duljine.sort()
print(f'{len(out)} opisa -> {DST}')
print(f'rijeci: min {duljine[0]}, medijan {duljine[len(duljine)//2]}, max {duljine[-1]}')
