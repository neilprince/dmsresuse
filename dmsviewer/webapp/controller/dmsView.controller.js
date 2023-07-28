sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.dmsviewer.controller.dmsView", {
            onInit: function () {
                // this.getView().byId("sdi-container").setSettings({
                //     "repositoryId": "77345a30-a136-4518-9f12-3c67da93da47",
                //     "objectId": "3bbe018000520e5358df9b46",
                //     "forceLoad": false                    
                // })
            },
            // onComponentCreated: function(oEvent) {
            //     this._oDocumentTable = oEvent.getParameter("component");
            //     // OPTIONAL: set a folder as home folder
            //     this._oDocumentTable.setHomeFolder("77345a30-a136-4518-9f12-3c67da93da47");
            //     // OPTIONAL: request a navigation to a repository & folder during runtime
            //     this._oDocumentTable.requestNavigationAndOpen("77345a30-a136-4518-9f12-3c67da93da47", "3bbe018000520e5358df9b46");
            // }            
        });
    });
