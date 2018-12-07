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
    }, 
    doInit: function(component, event, helper){
        var action = component.get("c.getHerokuURL");
        action.setCallback(this, function(response){
            if(state === "SUCCESS"){
                component.set("v.herokuDomain", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})