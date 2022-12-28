import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";

function List() {
    const itemStyle = {
        border: "1px solid",
        borderColor: "blue",
        backgroundColor: "DodgerBlue",
        padding: "5px",
        width: "330px"

    }
    let [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState(JSON.parse(localStorage.getItem('messageList'))||[]);
    useEffect(() => {
    localStorage.setItem('messageList', JSON.stringify(messageList))
    },[messageList])
    function handleRemoveItem(id){
        setMessageList(messageList.filter((obj) => obj.id !== id));
    }

    return  (
        <div>
            <input
                type="text"
                value={message}
                placeholder="Заповніть місце"
                onChange={e => {
                    setMessage(e.target.value);
                }}
            />
            <Button className={"button-85"}
                value="Add"
                onClick={e => {
                    if(message == ""){
                        message = "Пустий рядок";
                    }
                    else{
                        setMessageList([
                            ...messageList,
                            {
                                id: messageList.length + 1,
                                message: message
                            }
                        ])};
                    setMessage("");
                }}
            >Сохранити</Button>
            <div style={itemStyle}>
                {messageList.map(m => (
                    <p key={m.id}>{m.message} <Button className={"button-30"} onClick={event => handleRemoveItem(m.id)}>X</Button></p>
                ))}

            </div>
        </div>
    );
}

export default List