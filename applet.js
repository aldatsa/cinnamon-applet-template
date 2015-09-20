// Import APIs provided by Cinnamon defined in /usr/share/cinnamon/js/
const Applet = imports.ui.applet;       // /usr/share/cinnamon/js/ui/applet.js
const Settings = imports.ui.settings;   // /usr/share/cinnamon/js/ui/settings.js
const PopupMenu = imports.ui.popupMenu; // /usr/share/cinnamon/js/ui/popupMenu.js

// The UUID (Universally Unique IDentifier) of your applet.
// Change this constant to something like the-name-of-your-applet@your-name-or-domain-name
// It must match the uuid on the metadata.json file and the name of the folder of your applet.
const APPLET_UUID = "cinnamon-applet-template";

// The directory of the applet. In this case is ~/.local/share/cinnamon/applets/cinnamon-applet-template
const APPLET_DIR = imports.ui.appletManager.appletMeta[APPLET_UUID].path;

const GLib = imports.gi.GLib;
const Gettext = imports.gettext;

Gettext.bindtextdomain(APPLET_UUID, GLib.get_home_dir() + "/.local/share/locale");

// Used to translate strings into different languages
function _(str){
    return Gettext.dgettext(APPLET_UUID, str);
}

// The constructor of our applet.
function CinnamonAppletTemplate(metadata, orientation, panel_height, instance_id) {
    this._init(metadata, orientation, panel_height, instance_id);
}

CinnamonAppletTemplate.prototype = {

    // Inherit from Applet.IconApplet's prototype, which is an applet that displays an icon.
    // There are more options like Applet, TextApplet, and TextIconApplet.
    __proto__: Applet.IconApplet.prototype,

    _init: function(metadata, orientation, panel_height, instance_id) {
        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

        // Set the path to our custom icon.
        this.set_applet_icon_path(APPLET_DIR + "/icon.png");

        // Or use an icon available at /usr/share/icons/, for example,
        // this.set_applet_icon_name("folder");

        // By wrapping the string with the _( ) function,
        // we are telling Cinnamon to translate the string to the correct language,
        // if translations are available.
        this.set_applet_tooltip(_("Hello Cinnamon!"));

        this._bindSettings(metadata, orientation, panel_height, instance_id);

        // Create a popup menu
        this.menuManager = new PopupMenu.PopupMenuManager(this);
		this.menu = new Applet.AppletPopupMenu(this, orientation);
		this.menuManager.addMenu(this.menu);

        // Add a menu element
        // First argument is the text of the menu element, the second a callback function to execute when the element is clicked.
		this.menu.addAction(_("Menu element 1"), function(event) {
				global.log(_("Menu element 1 clicked"));
		});

        // Add another menu element
        this.menu.addAction(_("Menu element 2"), function(event) {
				global.log(_("Menu element 2 clicked"));
		});
    },

    _bindSettings: function(metadata, orientation, panel_height, instance_id) {

        // Reference: https://github.com/linuxmint/Cinnamon/wiki/Applet,-Desklet-and-Extension-Settings-Reference

        // Create the settings object
        // In this case we use another way to get the uuid, the metadata object.
        this._settings = new Settings.AppletSettings(this, metadata.uuid, instance_id);

        // Tell the settings provider we want to bind one of our settings keys to an applet property.
        this._settings.bindProperty(Settings.BindingDirection.IN,   // The binding direction - IN means we only listen for changes from this applet.
                         'settings-test-scale',                     // The key of the UI control associated with the setting in the "settings-schema.json" file.
                         'settings-test-scale',                     // Name that is going to be used as the applet property.
                         this.onSettingsChanged,                    // Method to be called when the setting value changes.
                         null                                       // Optional - it can be left off entirely, or used to pass any extra object to the callback if desired.
        );
    },

    on_applet_clicked: function() {

        // Show/Hide the menu.
        this.menu.toggle();
    },

    onSettingsChanged: function() {

        // Do you whatever you want in response to the changes made by the user.

        // global.log prints to the file ~/.cinnamon/glass.log. It's useful for debugging.
        global.log(_("Settings changed..."));
        global.log(_("The new value of 'settings-test-scale' is: " + this._settings.getValue('settings-test-scale')));
    }

};

// To load an applet, Cinnamon calls the main function in the applet's code, and
// expects to get an Applet object, which it will add to the panel.
// Parameters:
//    * metadata      the information inside metadata.json plus some more.
//    * orientation   is whether the panel is at the top or the bottom.
//                    The applet can behave differently depending on its position,
//                    eg. to make the popup menus show up on the right side.
//    * panel_height  tells you, unsurprisingly, the height of the panel.
//                    This way we can scale the icons up and down depending on how large the panel is.
//    * instance_id   tells you which instance of the applet you are, since there can be multiple instances of the applet present.
//                    While this is just a number assigned to the applet and doesn't have much meaning by itself,
//                    it is required to access, say, the individual settings of an applet.
function main(metadata, orientation, panel_height, instance_id) {

    // Instantiate and return our applet object.
    return new CinnamonAppletTemplate(metadata, orientation, panel_height, instance_id);
}
