class FilaTablaDatos{
    constructor(props){
        this.props=props;
    }

    render = function(){
        const tr = document.createElement('tr');
        tr.classList.add('centrado')

        for(let value of this.props.values){
            const td= document.createElement('td');
            td.innerText = value;
            tr.appendChild(td);
        }
        return tr;
    }
    
}

export {FilaTablaDatos};