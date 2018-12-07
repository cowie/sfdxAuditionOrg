({
	scriptsLoaded : function(component, event, helper) {
		//create the js object to create the app
    var div = document.getElementById("replace_me-v2_popup");
    div.innerText = "Click on me to play me";
    div.onclick = function () {
        var player = new ZiggeoApi.V2.PopupPlayer({
            attrs: {
                width: 640,
                height: 320,
                video: "_sample_video"
            }
        });
        player.activate();
    };
	}
})