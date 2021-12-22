import "./WidgetLg.css";

const WidgetSm = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="wigetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgth">Customer</th>
                    <th className="widgetLgth">data</th>
                    <th className="widgetLgth">Amount</th>
                    <th className="widgetLgth">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/06/find-models-8.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Panki Chodhori</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$1222.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/06/find-models-8.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Panki Chodhori</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$1222.00</td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/06/find-models-8.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Panki Chodhori</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$1222.00</td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/06/find-models-8.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Panki Chodhori</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$1222.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    );
};

export default WidgetSm;