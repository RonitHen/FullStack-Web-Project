
export function ContactForm() {
    return (
        <div>
            <form>
                <label htmlFor="title">Contact Subject</label>
                <input id="title" name="title" type="text" /><br/><br/>
                <label htmlFor="content">Contact message</label>
                <textarea id="content" name="content"></textarea><br/>
                <button type="submit">Send message</button>
            </form>
        </div>
    )
}