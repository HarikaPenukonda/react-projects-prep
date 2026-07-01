import Contact from './components/Contact'
import './index.css'
/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */

export default function ContactCard() {
    return (
        <>
            <Contact/>
        </>
    )
}
