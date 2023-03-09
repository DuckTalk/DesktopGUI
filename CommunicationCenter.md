# Kommunikationszentrum

Sie sind Teil der IT-Abteilung eines Großkonzerns und haben den Auftrag erhalten, ein Kommunikationssystem zu entwerfen. Der Konzern will das Kommunikationssystem im internen Einsatz verwenden, behält sich aber auch vor, das System später extern zu vermarkten. Behalten Sie dies im Hinterkopf.

Die zukünftigen Produkt-Owner und der Sales haben für das System schon einige Bulletpoints zusammengeschrieben.

## Grobanforderungen

Folgende Forderungen wurden erörtert.

### Authentifizierung

Im Moment soll eine Authentifizierung an die bestehende Infrastruktur (MS365) erfolgen. Das Design der Software soll allerdings so modular erfolgen, dass später andere Authentifizierungsmethoden implementiert werden können, welche dann nur mehr durch einen Austausch der Konfiguration aktiviert werden. Es darf hier keine Neuerstellung des Projekts erforderlich werden.

### Database Backend

Bei der Verwaltung von eigenen Daten, soll eine Datenbank verwendet werden, auch bei dieser Implementation soll es sich wiederum um eine modulare Einheit handeln, welche durch Konfiguration ausgetauscht werden kann. Bei der Erstimplementation sind keine Vorgaben gestellt worden, für welches Backend als Erstes ein Modul erstellt werden soll.

### Offene Boards

Es soll öffentliche Kommunikationsboards geben, welchen jeder authentifizierte Benutzer beitreten können soll.

### Gruppen

Weiters sollen Gruppen, geben, welchen nur nach Einladung durch einen Gruppenadministrator beigetreten werden kann.

### Private Nachrichten

Es soll Möglichkeiten geben, persönliche Nachrichten zwischen einzelnen authentifizierten Benutzern zu versenden.

### Attachments

Nachrichten aller Nachrichtenklassen sollen Attachments hinzugefügt werden können.

### END2END

Nachrichten zwischen Einzelpersonen sollen End2End verschlüsselt werden.

# Implementationsdetails

Das Leaderboard hat sich entschieden, die Entwicklung des Systems wie folgt aufzusetzen.

## Dirtyserver

In einem ersten Schritt soll sich ein Team mit der Entwicklung eines quick and dirty Servers beschäftigen, um schnell eine Arbeitsumgebung für alle Teams bereitzustellen.

### Erleichterungen

Dieser Server muss die geforderten Modularität-Konzepte nicht erfüllen und nur eine einfache Authentifizierung weniger Benutzer unterstützen.

Auch Performance-Überlegungen müssen noch nicht angestellt werden.

Wichtig wiederum ist, dass die Kommunikation des Servers schon weitgehend dem des finalen Produkts entsprechen soll. Also muss hier einiges an Knowhow generiert werden, bevor es an die Implementation geht.

## Github Setup.

Ein Team soll parallel zu der Entwicklung des Testservers sich um eine hinreichende Infrastruktur auf GitHub kümmern.

Es soll ein Repository erstellt werden, in welchem in eigenen Repositorys Komponenten als Submodule bereitgestellt werden.

## Deployment

Andere Teams sollen auch schon parallel zu den anderen Entwicklungen sich mit dem Deployment der Software beschäftigen.

Da dies für jede verwendete Technologie andere Anforderungen stellt, werden sich die Teams so bilden, nach der später in Ihren Submodulen verwendeten Technologien.

# Geforderte Clients

Auf dieses Kommunikationssystem soll mit verschiedenen Clients zugegriffen werden können.

## Desktop GUI

Eine Desktop GUI soll erstellt werden, zum Beispiel Electron.

## Web GUI

Eine browserbasierte Anwendung soll erstellt werden.

## Mobile APP

Auch eine Mobile Applikation soll bereitgestellt werden. (zB. Android oder iOS)

## Ein Text GUI

Ein Text GUI, welches auch gescriptet verwendet werden kann, soll erstellt werden. Um zum Beispiel Benachrichtigungen zu automatisieren.

# Allgemeines

Folgende Anforderungen sollten selbstverständlich sein. Allerdings seien sie hier noch einmal erwähnt. 

## Tagebuch

Natürlich soll jeder Mitarbeiter und jede Mitarbeiterin ein Tagebuch führen und alle Arbeitsschritte dokumentieren.

## Pflichtenheft

Für jede Komponente soll ein Pflichtenheft erstellt werden.

## Testing

Shift Left. Sie müssen schon sehr früh im Entwicklungszeitraum das lückenlose Testen der einzelnen Komponenten gewährleisten.

## Dokumentation

Die GUIs und die Konfiguration der modularen Komponenten muss dokumentiert werden. Diese Dokumentation soll in die folgenden drei Teile unterteilt sein.

1. Eine Dokumentation für den Endanwender
2. Eine Dokumentation für den Administrator
3. Eine Dokumentation für Entwickler, welche an dem Projekt weiter arbeiten dürfen.

## Design

Das Softwaredesign soll wohlüberlegt sein und sinnvoll gegliedert sein. Keine großen Module, die alles zur Verfügung stellen.

## Sourcecode

Arbeiten werden nicht im MAIN-Branch der Sourcecodeverwaltung durchgeführt.

In den MAIN-Branch wird erst gemerged, nachdem Ihr Arbeitsschritt abgeschlossen, getestet ist und Sie etwaige zwischenzeitlich aufgetretene Änderungen am MAIN Branch in Ihren Branch eingepflegt haben.

Ihr Entwicklungsbranch wird spätestens alle zwei Arbeitsstunden commited und gepushed.

Für eine neue Aufgabe wird ein neuer Entwicklungsbranch erstellt.

Alte Entwicklungsbranches werden nur zur Fehlerbehebung an dem entsprechenden Arbeitspaket herangezogen. (Nicht auf die Änderungen in MAIN vergessen)

