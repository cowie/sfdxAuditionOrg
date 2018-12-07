public class cdgAuditionHelper {

    @AuraEnabled
    public static string getHerokuURL(){
        return [select MasterLabel from cdgAuditionApp__mdt limit 1].MasterLabel;
    }
}