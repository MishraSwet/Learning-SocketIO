import { useState } from "react"

export default function ChatBox() {
    const [message, setMessage] = useState("");
    function handler(e) {
        setMessage(e.target.value);
    }
    return (
        <div>
            <form>
                <input placeholder="Enter Message" onChange={handler}>
                </input>
                <button type="submit" value={message}>Send!</button>
            </form>
        </div>
    )
}