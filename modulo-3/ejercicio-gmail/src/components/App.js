import "../stylesheets/App.css";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import Header from "./Header.js";
import emails from "../data/emails.json";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterKeyUp = this.handleFilterKeyUp.bind(this);
    this.state = {
      filteredText: "",
      emails: emails,
    };
  }

  renderEmails() {
    const inboxFilter = this.state.filteredText.toLowerCase();
    return this.state.emails
      .filter((email) => {
        return (
          email.subject.toLowerCase().includes(inboxFilter) ||
          email.fromName.toLowerCase().includes(inboxFilter) ||
          email.body.toLowerCase().includes(inboxFilter)
        );
      })
      .map((email, id) => {
        return (
          <EmailItem
            key={id}
            from={email.fromName}
            subject={email.subject}
            time={email.date}
            deleted={email.deleted}
            read={email.read}
          />
        );
      });
  }

  handleFilterKeyUp(data) {
    this.setState({ filteredText: data.filteredText });
  }

  render() {
    return (
      <div>
        <Header handleKeyUpProp={this.handleFilterKeyUp} />
        <table className="table">
          <tbody>{this.renderEmails()}</tbody>
        </table>
        <EmailReader />
      </div>
    );
  }
}

export default App;
