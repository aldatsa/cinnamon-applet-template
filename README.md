# Cinnamon Applet Template
A basic starter template for Cinnamon Applets.

WORK IN PROGRESS

## How to create a pot file

Use cinnamon-json-makepot (https://github.com/linuxmint/Cinnamon/blob/master/files/usr/lib/cinnamon-json-makepot/cinnamon-json-makepot.py)

Example

    cinnamon-json-makepot --js cinnamon-applet-template.pot

## How to create a po file from the pot file

Use msginit (https://www.gnu.org/software/gettext/manual/html_node/msginit-Invocation.html)

Example

    msginit --locale=eu --input=cinnamon-applet-template.pot

## How to test a translation

First generate a mo file, for example:

    msgfmt eu.po --output-file cinnamon-applet-template.mo

Then, move it to the corresponding folder, in our example: ~/.local/share/locale/eu/LC_MESSAGES/

    mv cinnamon-applet-template.mo ~/.local/share/locale/eu/LC_MESSAGES/

It may be necessary to restart Cinnamon for the translations to take effect.
