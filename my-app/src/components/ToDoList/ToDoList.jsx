import React from 'react'
import "./index.scss"
import plus from "../../assets/plus.png"
import check from "../../assets/check.png"
import dump from "../../assets/dump.png"
import pen from "../../assets/pen.png"

const ToDoList = () => {

    const Add = () => {
        const list = document.getElementById('list-itens')
        let newInput = document.getElementById('newInput').value
        const newRow = `<div class='to-do-list__new'>
                            <p>${newInput}</p>
                            <img src=${check} alt='check'/>
                            <div>
                                <img src=${pen} alt='editar'/>
                                <img src=${dump} alt='deletar'/>
                            </div>
                        </div>`
        

        list.innerHTML += `${newRow}`
        document.getElementById('newInput').value = ''
    }

    return (
        <div className='to-do-list'>
            <ul>
                <li>Tarefas</li>
                <li>Status</li>
                <li>Opções</li>
            </ul>
            <div id='container'>
                <div id='list-itens'>

                </div>
                <div className='to-do-list__new-to-do'>
                    <input type="text" id='newInput' placeholder='Nova tarefa...' />
                    <img onClick={Add} src={plus} alt="adicionar" />
                </div>
            </div>
        </div>
    )
}

export default ToDoList