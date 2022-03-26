window.onload = () => {
    let a = (x = 0, y = 0) => {
        console.log(this);
    }
    let d = {
        x: 0,
        y: 1,
        e: function(){
            console.log(this);
        },
        f: () => {
            console.log(this.x + " " + this.y);
        }
    }
    a();
    d.e();
    d.f.apply(d);
};