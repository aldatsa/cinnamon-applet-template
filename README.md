# Cinnamon Applet Template
A basic starter template for Cinnamon Applets.

WORK IN PROGRESS

# How to start your own applet from this template

1. Go to applets folder

    ```bash
    cd ~/.local/share/cinnamon/applets
    ```
2. Clone this project

    ```bash
    git clone https://github.com/aldatsa/cinnamon-applet-template.git
    ```

3. Change the name of the folder from cinnamon-applet-template to something like the-name-of-your-applet@your-name-or-domain-name

4. Change the uuid property  in the metadata.json file to match the name that you gave the folder of your applet in the previous step.

    ```json
    "uuid": "cinnamon-applet-template",
    ```

5. Change the APPLET_UUID constant in the applet.js file as well.

    ```javascript
    const APPLET_UUID = "cinnamon-applet-template";
    ```
6. Create something cool.

7. Upload your applet to http://cinnamon-spices.linuxmint.com/applets for others to enjoy.

## How to create a pot file

Use cinnamon-json-makepot (https://github.com/linuxmint/Cinnamon/blob/master/files/usr/lib/cinnamon-json-makepot/cinnamon-json-makepot.py)

Example

```bash
cinnamon-json-makepot --js cinnamon-applet-template.pot
```

## How to create a po file from the pot file

Use msginit (https://www.gnu.org/software/gettext/manual/html_node/msginit-Invocation.html)

Example

```bash
msginit --locale=eu --input=cinnamon-applet-template.pot
```

## How to update a existing po file from the pot file

Use msgmerge (https://www.gnu.org/software/gettext/manual/html_node/msgmerge-Invocation.html)

Example

```bash
msgmerge --update eu.po cinnamon-applet-template.pot
```

## How to test a translation

First generate a mo file using msgfmt (https://www.gnu.org/software/gettext/manual/html_node/msgfmt-Invocation.html), for example:

```bash
msgfmt eu.po --output-file cinnamon-applet-template.mo
```

Then, move it to the corresponding folder, in our example: ~/.local/share/locale/eu/LC_MESSAGES/

```bash
mv cinnamon-applet-template.mo ~/.local/share/locale/eu/LC_MESSAGES/
```

It may be necessary to restart Cinnamon for the translations to take effect.

##License

cinnamon-applet-template is free software/open source, and is distributed under the GNU General Public License (GPL) version 3 license.
