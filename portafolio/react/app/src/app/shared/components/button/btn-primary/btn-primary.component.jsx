import './btn-primary.component.css'
export default function BtnPrimaryComponent({label, icon}) {
    return (
        <button type="button" className="btn-primary">{label}</button>
    )
}