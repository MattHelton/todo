import React, { memo } from 'react';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import { List, ListItem, Checkbox, IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

const ToDoListItem = memo(props => (
    <ListItem divider={props.divider}>
        <Checkbox
            onClick={props.onCheckBoxToggle}
            checked={props.checked}
            disableRipple
        />
        <ListItemText primary={props.text} />
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
                <DeleteOutlined />
            </IconButton>           
        </ListItemSecondaryAction>
    </ListItem>
));

export default ToDoListItem;