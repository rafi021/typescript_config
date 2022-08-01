/*intersection types */

type Dragable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Dragable & Resizeable; // intersection of types

let textBox: UIWidget = {
    drag: () => {
        console.log(' drag this oject');
    },
    resize: () => {
        console.log(' resize this oject');
    }
}

console.log(textBox);
textBox.drag();
textBox.resize();
