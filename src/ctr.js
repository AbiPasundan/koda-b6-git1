export default function ctr(params) {
    if(typeof params !== "number"){
        console.log("input bukan angka");
    }
    return params * 4/5;
}