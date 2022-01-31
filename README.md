# Türchen-Liste für Schulungen

Eine generische Software für die sukzessive Abarbeitung von multi-medialen Inhalten.

![](https://img.shields.io/badge/license-MIT-green)![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

---

# Entwicklung

Die Anwendung besteht aus Text-Dateien welche mit jedem Text-Editor verändert werden können. Empfholen wird Visual Studio Code als IDE. Der Kommandozeilenbefehl 'npm run dev' führt dazu das die aktuellen Dateien im Browser angezeigt und Änderungen dargestellt werden. Fehler werden in der Console der "Developer Tools " (F12) ausgegeben.

# Installation 

Hierzu einfach den Projektordner in das Ausgabeverzeichniss eines Webservers kopieren. Der Quellcode muss nicht kompiliert oder gebuildet werden.

# Update

Hierzu alte Daten mit aktuellen Daten überschreiben. Insbesondere die Datei 'index.html', von dort werden alle anderen Dateien referenziert.

# Konfigurationen

* Alle sichtbaren Texte sind in den beiden Text-Dateien im 'configurationen'-Ordner gespeichert.
	* In 'allgemein.js' können die allgemeinen texte bearbeitet werden.
	* In 'inhalte.js' werden alle sichbaren Inhalte aufgelistet, welche von den Nutzern abgearbeitet werden sollen.
* Im Ordner images ist das jeweilige Hintergrundbild unter 'hintergrundbild.jpg' abgelegt.
* Im Ordner media werden alle Bilder und Videos der Inhaltskarten erwartet welche in 'inhalte.js' definiert werden.

# Kontakt

Oberverwaltungsgericht Rheinland-Pfalz, 
Deinhardpassage 1, 56068 Koblenz 
Telefon: 0261 1307 - 0
poststelle(at)ovg.jm.rlp.de

# Lizenz

Diese Software ist open-source lizensiert. Bilder, Videos, Texte und andere Inhaltsdaten können dem Urheberrecht dritter unterliegen und unterliegen in diesem Fall nicht dieser Lizensierung.

Copyright © 2021 Oberverwaltungsgericht Rheinland-Pfalz sofern nicht anders vermerkt.
Lizenziert unter:

The MIT License (MIT)

Copyright (c) 2021 Oberverwaltungsgericht Rheinland-Pfalz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.