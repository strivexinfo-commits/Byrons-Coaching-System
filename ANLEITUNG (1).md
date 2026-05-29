# Dein Coaching-System online stellen
## Schritt-für-Schritt — auch ohne Programmier-Wissen

Du brauchst dafür ungefähr 30 Minuten. Folge einfach jedem Schritt. Wenn etwas hakt, schreib mir die Stelle.

---

## WAS DU AM ENDE HAST

Eine eigene Web-Adresse (z.B. `dein-coaching.vercel.app`), die du auf jedem Gerät öffnest. Dort verwaltest du Klienten, gibst ein was im Gespräch rauskam, und die KI baut für jeden Mann eine **individuelle** Analyse + Hausaufgabe. Dein KI-Schlüssel bleibt geschützt — niemand kann ihn auslesen.

---

## WAS DU BRAUCHST (alles kostenlos zum Start)

1. Eine E-Mail-Adresse
2. Einen kostenlosen GitHub-Account (zum Speichern des Codes)
3. Einen kostenlosen Vercel-Account (stellt die App online)
4. Einen Anthropic-Schlüssel (hier zahlst du pro Nutzung — anfangs wenige Euro im Monat)

---

## TEIL 1 — Den Anthropic-Schlüssel holen

1. Geh auf **console.anthropic.com** und erstelle einen Account.
2. Lade etwas Guthaben auf (Menü „Billing" / „Plans"). 5 € reichen für den Anfang locker.
3. Geh auf **„API Keys"** → **„Create Key"**.
4. Kopiere den Schlüssel sofort (er beginnt mit `sk-ant-...`) und speichere ihn dir kurz irgendwo — du siehst ihn nur einmal.

⚠️ Wichtig: Diesen Schlüssel NIE öffentlich teilen, nie in eine Nachricht schreiben, nie auf einer Webseite zeigen.

---

## TEIL 2 — Den Code zu GitHub hochladen

1. Geh auf **github.com** und erstelle einen kostenlosen Account.
2. Klicke oben rechts auf **„+"** → **„New repository"**.
3. Name z.B. `coaching-system`. Wähle **Private**. Klicke **„Create repository"**.
4. Auf der nächsten Seite: **„uploading an existing file"** anklicken.
5. Zieh ALLE Dateien aus dem Ordner `coaching-app` hier rein:
   - `index.html`
   - `package.json`
   - den Ordner `api` mit `analyse.js` darin
   
   (Wichtig: Die Struktur muss erhalten bleiben — `analyse.js` muss im Ordner `api` liegen.)
6. Unten **„Commit changes"** klicken.

---

## TEIL 3 — Bei Vercel online stellen

1. Geh auf **vercel.com** → **„Sign Up"** → wähle **„Continue with GitHub"** (verbindet beide).
2. Im Vercel-Dashboard: **„Add New…"** → **„Project"**.
3. Wähle dein `coaching-system` Repository → **„Import"**.
4. **WICHTIG — bevor du auf Deploy klickst:** Öffne **„Environment Variables"**.
   - Name (Key): `ANTHROPIC_API_KEY`
   - Value: dein Schlüssel `sk-ant-...` (den aus Teil 1)
   - Klicke **„Add"**.
5. Jetzt **„Deploy"** klicken.
6. Warte 1-2 Minuten. Fertig! Du bekommst eine Adresse wie `coaching-system-xxx.vercel.app`.

---

## TEIL 4 — Testen

1. Öffne deine neue Adresse.
2. Lege einen Test-Klienten an.
3. Geh rein → „Individuelle Challenge erstellen" → schreib ein paar Sätze rein wie ein Gespräch lief → „Individuell berechnen".
4. Wenn nach ein paar Sekunden eine maßgeschneiderte Challenge erscheint: **Es läuft.** 🎉

Wenn ein Fehler kommt („Kein API-Schlüssel" oder ähnlich): Geh in Vercel → dein Projekt → **Settings** → **Environment Variables** → prüf ob `ANTHROPIC_API_KEY` exakt so geschrieben ist und der Wert stimmt. Danach **Deployments** → das oberste → **„Redeploy"**.

---

## WIE DU ES BENUTZT

**Nach jedem Gespräch:**
1. Klient öffnen (oder neu anlegen)
2. „+ Gespräch hinzufügen"
3. Reinschreiben was rauskam (frei, oder dein Memo-Transkript einfügen) + Sprachmemo hochladen
4. **„✦ Analysieren"** → die KI gibt dir individuell: Muster, Analyse, Fragen fürs nächste Mal, seine Tiny Challenge
5. **„Speichern & Challenge zuordnen"** — alles landet beim Klienten
6. Auf der Klienten-Seite: **„Text zum Senden kopieren"** → schick ihm seine Challenge

**Wichtig — regelmäßig Backup machen:** Oben rechts „↓ Backup". Die Daten liegen im Browser; mit dem Backup bist du sicher.

---

## WAS ES KOSTET

- Vercel: kostenlos für deine Nutzung
- GitHub: kostenlos
- Anthropic: pro Analyse ein paar Cent. Bei wenigen Klienten ein paar Euro im Monat. Du behältst über das Guthaben die volle Kontrolle.

---

## DATENSCHUTZ — bitte ernst nehmen

Du speicherst intime Gespräche von Menschen. In Deutschland gilt die DSGVO. Mindestens:
- Hol dir von jedem Klienten die schriftliche Einwilligung dass du Notizen und (falls vorhanden) Aufnahmen speicherst.
- Sag ihnen wo die Daten liegen (auf deinem Gerät / bei Vercel).
- Nimm Gespräche nur auf wenn der Klient ausdrücklich zustimmt.
- Lösche Daten wenn ein Klient es verlangt (Klient löschen-Knopf).

Wenn dein Business wächst, sprich einmal mit jemandem der sich mit DSGVO auskennt. Das schützt dich und deine Klienten.
