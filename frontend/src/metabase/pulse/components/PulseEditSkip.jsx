import React, { Component } from "react";
import PropTypes from "prop-types";

import Toggle from "metabase/components/Toggle.jsx";

export default class PulseEditSkip extends Component {
    static propTypes = {
        pulse: PropTypes.object.isRequired,
        setPulse: PropTypes.func.isRequired,
    };

    toggle = () => {
        const { pulse, setPulse } = this.props;
        setPulse({ ...pulse, skip_if_empty: !pulse.skip_if_empty });
    }

    render() {
        const { pulse } = this.props;
        return (
            <div className="py1">
                <h2>Skip if no results</h2>
                <p className="mt1 h4 text-bold text-grey-3">Skip a scheduled Pulse if none of its questions have any results.</p>
                <div className="my3">
                    <Toggle value={pulse.skip_if_empty || false} onChange={this.toggle} />
                </div>
            </div>
        );
    }
}
