export default function compareStrings(a, b){
    if (a.toString() > b.toString()){
        return 1;
    } else if (a.toString() < b.toString()){
        return -1;
    }
    return 0;
}