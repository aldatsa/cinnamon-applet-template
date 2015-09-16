/**
 * /usr/share/cinnamon/js/
 */
const Applet = imports.ui.applet;
const APPLET_UUID = "cinnamon-applet-template@aldatsa";
const APPLET_DIR = imports.ui.appletManager.appletMeta[APPLET_UUID].path;

function KaixoMundua(metadata, orientation, panel_height, instance_id) {
    this._init(metadata, orientation, panel_height, instance_id);
}

KaixoMundua.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(metadata, orientation, panel_height, instance_id) {
        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

        this.set_applet_icon_path(APPLET_DIR + "/icon.png");
        this.set_applet_tooltip(_("Kaixo mundua"));
    }
};

function main(metadata, orientation, panel_height, instance_id) {
    return new KaixoMundua(metadata, orientation, panel_height, instance_id);
}
