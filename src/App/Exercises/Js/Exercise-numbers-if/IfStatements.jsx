import './styles.css';

export const IfStatements = () => { 
const iAmWoman = true; 
const a=5;

if (iAmWoman) {
    console.log ('You are a man')
} else {
    console.log ('You are not a man')} //if (a<10) {console.log ('a < 10')} else if ('a')

const exp = 'Blue'
    switch (exp)  {
        case 'Czerwony': console.log('Kolor jest czerwony')
        case 'Blue': console.log('Kolor jest niebieski')
        case 'Green': console.log('Kolor jest zielony')
        default:  console.log('Kolor nie jest dostepny :(')
    }

    //conditional If statement (trenary operator)
    const conditionalIf = a > 4 ? console.log ('Wieksze od 4') : console.log ('Mniejsze lub rowne 4')

    //const result4 = iAmWoman && console.log ('You are woman')
    //const result5 = iAmWoman && console.log ('You are man')

    const result4 = iAmWoman && 'You are a woman';
    const result5 = iAmWoman && 'You are a man';

    return <div>
        {result4 === 'You are a woman' && <div> Jestes kobieta </div> }
        {result5 === 'You are a man' && <div> Jestes facetem </div> }

        {iAmWoman && <div> Jestes facetem </div> }
        {!iAmWoman && <div> Jestes kobieta</div> }
    </div>
}

