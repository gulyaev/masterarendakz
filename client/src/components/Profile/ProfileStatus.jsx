import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        console.log("this " + this);
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    render() {
        return (
            <>
                {
                    this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} style={{ border: "1px solid black", padding: "2px 0 2px 2px", width: "300px", borderRadius: "4px" }} id="status" type="text" value={this.state.status} />
                    </div>
                }
                {
                    !this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode} style={{ marginBottom: "5px" }}>
                        <span style={{ fontWeight: "bold" }}>Мой статус: </span>
                        {this.props.status || "No status"}
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;