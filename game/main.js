
const field = document.getElementById( 'field');

for (let xx = 0; xx <10; xx++)
    {
    let vert = document.createElement('div');
    vert.getAttribute(`data-x`);
    vert.dataset.x = `${xx}`;
    for (let yy = 0; yy<10; yy++)
        {
        let hor = document.createElement('div');
        hor.setAttribute('class','field');
        hor.getAttribute(`data-x`);
        hor.getAttribute(`data-y`);
        hor.dataset.x = `${xx}`;
        hor.dataset.y = `${yy}`;
        hor.innerHTML+=`x${hor.dataset.x} y${hor.dataset.y}`;
        vert.append(hor);
        }
    field.append(vert);
    }
class hero {
    constructor(xx,yy, mayMove, sprite, heroName){
        this.xx = xx;
        this.yy = yy;
        this.mayMove = mayMove;
        this.sprite = sprite;
        this.heroName = heroName;
        function set() {
            const vert = field.querySelectorAll(`data-x[${xx}]`)
            vert[yy].innerHTML = heroName;
        }
    }
}
let testHero = new hero(0,0,false,src = 'sprites/test', 'test');