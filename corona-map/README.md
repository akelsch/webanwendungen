# corona-map

https://moodle.htwsaar.de/mod/assign/view.php?id=34661

## Links

* Karte: https://corona.rki.de/
* API: https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/dd4580c810204019a7b8eb3e0b329dd6_0
* JS Options: https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/

## Anforderungen

1. Deutschlandkarte mit Land- und Stadtkreise (Kreise)
2. Balkendiagramm aus der vorherigen Übung

Die Funktionen zur Erzeugung der Darstellungen sollen zwei Parameter haben: data und options. data enthält die Daten des Robert-Koch-Instituts (RKI) und options ist ein Objekt, über dessen Eigenschaften die Darstellung beeinflusst werden kann.

Der Benutzer kann wählen, ob die Anzahl der Fälle, die die Farbe bestimmt, die Anzahl der Infizierten pro 100.000 Einwohner (cases_per_100k) ist oder Anzahl der Infizierten pro 100.000 Einwohner der letzten 7 Tage (cases7_per_100k).

Bewegt die Benutzerin die Maus über einen Kreis, so soll dessen Name als Tooltip angezeigt werden. Klickt sie auf einen Kreis, so soll bei der Klickposition ein Popup-Fenster angezeigt werden. Verlässt die Maus den Kreis, so verschwindet dieses Popup-Fenster.

Die Karte ist so skaliert, dass Deutschland vollständig sichtbar ist und dadurch der zur Verfügung stehende Platz möglichst ausgeschöpft ist.

Demonstrieren Sie die Änderung aller Optionen, indem Sie dem Benutzer eine Auswahlmöglichkeit geben, mit dem er entweder die Standardoptionen wählen kann oder einen festen Satz von Alternativoptionen. Für diese Aufgabe ist es nicht erforderlich, dass der Benutzer die Optionen selbst bestimmen kann.

### Kreisumrisse

* Als SVG path Elemente
* Umrissfarbe als Option, default schwarz
* Füllfarbe mit hsl
  * Sättigung (Saturation) auf 100%
  * Basisfarbe (Hue) als Option, default blau = 240
  * Helligkeit (Lightness) hängt von der Anzahl der Corona-Infizierten pro 100.000 Einwohner ab (0 = 100%, Deutschland-weit maximal = 50%), dazwischen wird linear interpoliert
* Gewählter Kreis wird hervorgehoben (gleichzeitig mit Beginn der Animation des jeweiligen Balkens)
  * Umriss als Option, default rot
  * Dicke als Option, default ?
  * Dicke animiert

### Popup

* Name des Kreises
* Name des Bundeslandes
* Einwohnerzahl des Kreises
* Anzahl aller Infizierten
* Anzahl der Infizierten pro 100.000 Einwohner
* Anzahl der Infizierten pro 100.000 Einwohner der letzten 7 Tage
* Anzahl der Toten

### Balkendiagramm

* Auswahlmöglichkeit für die Bundesländer, default alle
* Anzahl der Balken als Option, default 5
* Balken werden deutschlandweit gleich skaliert
* Balken sollen beim Wechsel des Bundeslandes animiert eingeblendet werden (Länge von 0 bis x)
* Balken erscheinen nacheinander gemäß ihrer Reihenfolge
