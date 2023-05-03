import { h } from "preact";
import LayoutGrid from "preact-material-components/LayoutGrid";
import Card from "preact-material-components/Card";
import Typography from "preact-material-components/Typography";
import "preact-material-components/LayoutGrid/style.css";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import "preact-material-components/Typography/style.css";

import "./style.css";

export default function App(props) {
  return (
    <div>
      <LayoutGrid>
        <LayoutGrid.Inner>
          <LayoutGrid.Cell cols="12">
            <Typography headline5 style={{ color: props.color }}>Upcoming Events</Typography>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols="6">
            <Card outlined>
              <div class="card-header">
                <h2 class=" mdc-typography--title">Title</h2>
                <div class=" mdc-typography--caption">Caption</div>
              </div>
              <Card.Media className="card-media" />
              <Card.Actions>
                <Card.ActionButtons>
                  <Card.ActionButton>OK</Card.ActionButton>
                </Card.ActionButtons>
                <Card.ActionIcons>
                  <Card.ActionIcon>share</Card.ActionIcon>
                </Card.ActionIcons>
              </Card.Actions>
            </Card>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols="6">
            <Card outlined>
              <div class="card-header">
                <h2 class=" mdc-typography--title">Title</h2>
                <div class=" mdc-typography--caption">Caption</div>
              </div>
              <Card.Media className="card-media" />
              <Card.Actions>
                <Card.ActionButtons>
                  <Card.ActionButton>OK</Card.ActionButton>
                </Card.ActionButtons>
                <Card.ActionIcons>
                  <Card.ActionIcon>share</Card.ActionIcon>
                </Card.ActionIcons>
              </Card.Actions>
            </Card>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols="6">
            <Card>
              <div class="card-header">
                <h2 class=" mdc-typography--title">Title</h2>
                <div class=" mdc-typography--caption">Caption</div>
              </div>
              <Card.Media className="card-media" />
              <Card.Actions>
                <Card.ActionButtons>
                  <Card.ActionButton>OK</Card.ActionButton>
                </Card.ActionButtons>
                <Card.ActionIcons>
                  <Card.ActionIcon>share</Card.ActionIcon>
                </Card.ActionIcons>
              </Card.Actions>
            </Card>
          </LayoutGrid.Cell>
        </LayoutGrid.Inner>
      </LayoutGrid>
    </div>
  );
}
