import ui from './__library'

export default function Main() {
    return (
        <ui.Frame direction="column" padding={10} gap={10}>
            <ui.Frame height={{ ratio: 40 }} gap={20}>
                <p>Hello Noha!</p>
                <p>First Frame</p>
            </ui.Frame>
            <ui.Frame>
                <p>Second Frame</p>
            </ui.Frame>
        </ui.Frame>
    )
}
