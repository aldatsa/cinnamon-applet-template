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
