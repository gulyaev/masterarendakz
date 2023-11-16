import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <>
                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} style={{ border: "1px solid black", padding: "2px 0 2px 2px", width: "300px", borderRadius: "4px" }} id="status" type="text" value={this.props.status} />
                    </div>
                }
                {
                    !this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode.bind(this)} style={{ marginBottom: "5px" }}>
                        {this.props.status}
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;