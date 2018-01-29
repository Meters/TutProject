import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';

import { prepareQuestions } from '../resources/resQuestion';

import * as actionsQuestion from '../actions/actionsQuestion';

class ScreenWelcome extends React.Component {
    
    static navigationOptions = {
        title: 'Welcome',
    };
    
    constructor(props){
        // Pass props back to parent
        super(props);
        
    }
    
    beginTest(){
        prepareQuestions(this.props);
        const { navigate } = this.props.navigation;
        navigate('Question');
    }

    render(){
        const { navigate } = this.props.navigation;
        
        // Title input tracker
        let titleInput;
        // return JSX
        return(
            <View>
                <Text>Welcome Screen</Text>

                <Button 
                    onPress={() => this.beginTest()}
                    title="Begin"
                    />
            </View>

        )
    }
}


// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        // You can now say this.props.books
        question: state.question
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        setQuestion: question => dispatch(actionsQuestion.setQuestion(question)),
        unsetQuestion: question => dispatch(actionsQuestion.unsetQuestion())
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(ScreenWelcome);
//export default ScreenWelcome;