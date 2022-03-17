var arr0 = ['5','Q','S','M','e','f']
var arr1 = ['2','A','X','I','d','v']
var arr2 = ['3','Z','R','K','c','y']
var arr3 = ['9','E','F','O','t','h']
var arr4 = ['6','D','V','L','g','n']
var arr5 = ['4','C','Y','P','b','u']
var arr6 = ['0','T','H','q','w','j']
var arr7 = ['7','G','N','a','s','m']
var arr8 = ['8','B','U','z','x','i']
var arr9 = ['1','W','J','e','r','k']

function generate(date){
    var dateArr = date.split('');
    var result = "";
    for(var i = 0 ; i<dateArr.length; i++){
        var random = Math.round(Math.random()*5); 
        switch(dateArr[i]) {
            case '0':
                result += arr0[random]; break;
            case '1':
                result += arr1[random]; break;
            case '2':
                result += arr2[random]; break;
            case '3':
                result += arr3[random]; break;
            case '4':
                result += arr4[random]; break;
            case '5':
                result += arr5[random]; break;
            case '6':
                result += arr6[random]; break;
            case '7':
                result += arr7[random]; break;
            case '8':
                result  += arr8[random]; break;
            case '9':
                result += arr9[random]; break;
            default:
              break;
       } 
    }
    return result;
}

function checkmm(mm){
    var mmArr = mm.split('');
    var result = "";
    for(var i = 0 ; i<mmArr.length; i++){
        if(jQuery.inArray(mmArr[i],arr0) >= 0){
            result += "0";
        }else if(jQuery.inArray(mmArr[i],arr1) >= 0){
            result += "1";
        }else if(jQuery.inArray(mmArr[i],arr2) >= 0){
            result += "2";
        }else if(jQuery.inArray(mmArr[i],arr3) >= 0){
            result += "3";
        }else if(jQuery.inArray(mmArr[i],arr4) >= 0){
            result += "4";
        }else if(jQuery.inArray(mmArr[i],arr5) >= 0){
            result += "5";
        }else if(jQuery.inArray(mmArr[i],arr6) >= 0){
            result += "6";
        }else if(jQuery.inArray(mmArr[i],arr7) >= 0){
            result += "7";
        }else if(jQuery.inArray(mmArr[i],arr8) >= 0){
            result += "8";
        }else if(jQuery.inArray(mmArr[i],arr9) >= 0){
            result += "9";
        }else{
            return false;
        }
        if( i == 3 || i == 5){
            result += "-";
        }
    }
    if(result.length != 10){
        return false;
    }
    var date = Date.parse(result);
    if(isNaN(date)){
        return false;
    }
    var now = new Date();
    if( date < now ){
        return false;
    }
    return true;
}
