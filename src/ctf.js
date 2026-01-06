export default function ctf(params) {
    if(typeof params !== "number"){
        console.log("input bukan angka");
    }
    return (params * 9/5) + 32;
}