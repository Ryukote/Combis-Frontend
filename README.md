# Testni zadatak - frontend

## Struktura projekta

Combis je strukturiran na sljedeći način:
	- @types (tipovi za komponente)
	- components
	- constants (mjesto za konstante poput url na backend)
	- data (client za rad sa backendom)
	- validator.ts (za validaciju podataka)

## Tehnologije koje se koriste:

- React.JS

## Paketi koji se koriste:

- reactstrap
- bootstrap
- papaparse

## Rad sa aplikacijom

Za početak je potrebno provjeriti da li se backend pokreće na istom uređaju kao i frontend. Ako se ne pokreće, potrebno je unutar "constants/personConstants" promjeniti varijablu "dev"
sa parametrom "savePersonUrl" na ispravni url na kojemu se backend pokreće.

Nakon toga potrebno je nad istim direktorijem u kojemu se nalazi package.json pokrenuti naredbu "npm i" kako bi se svi paketi koje aplikacija koristi instalirali.
Ako je sve prošlo dobro, može se pokrenuti aplikacija sa naredbom "npm start".

Aplikacija zahtjeva samo jedan unos. Potrebno je pritisnuti gumb "Choose file" i odabrati validnu CSV datoteku s kojom želimo raditi.
Aplikacija će pocrveniti polje koje nije validno (u konkretnom slučaju riječ je o poštanskom broju), te ako se odabere "Save data", aplikacija neće u bazu podataka spremiti taj redak.
Ako već postoji isti zapis (s obzirom da je jedino unikatno polje broj telefona, onda se gleda broj telefona da li već postoji u bazi podataka), dobit će se skočni prozor sa porukom greške.

Backend aplikaciju je obavezno potrebno pokrenuti prije frontend aplikacije.
