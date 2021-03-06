import React from 'react';
import { connect } from 'react-redux';
import ReactTimeout from 'react-timeout'
import { styles, buttonStyles } from '../styles';
import {
    Text,
    View,
    Button,
    Alert,
	Modal,
	TouchableOpacity
} from 'react-native';

import * as actionsQuestion from '../actions/actionsQuestion';
import { response } from '../resources/resQuestion';

import { prepareQuestions } from '../resources/resQuestion';

/*
class QuestionView extends React.Component {
    
    onPressLearnMore() {
		
		Alert.alert(
		  'Alert Title',
		  'My Alert Msg',
		  [
			{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
			{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			{text: 'OK', onPress: () => console.log('OK Pressed')},
		  ],
		  { cancelable: false }
		)
        
        var json = JSON.parse(response);
        question++;
        
        console.log(json);
        console.log(question+"");
        console.log(json[question]+"");
        
        this.setState({currentQuestion: json[question]});
		
	}
    
    constructor(props){
        super(props);
        this.state = {currentQuestion: props.question};
        console.log("IDDQD:" + this.state);
    }
    
    render(){
		
		return (
            <View style={styles.container}>
                <View style={styles.main}>
                    <Text>{this.state.currentQuestion.question}</Text>
                </View>

                <View style={buttonStyles.container}>

                    {this.state.currentQuestion.options.map( (item, index) => <AnswerButton key={index} text={item} onPress={this.onPressLearnMore}/>)}

                </View>
            </View>
        
        );
    }
    
}
*/

class AnswerButton extends React.Component {

    render() {
        
        return ( <Button 
                    style = { buttonStyles.answer } 
                    title = { this.props.text }
                    />
            );
    }

}

class ScreenQuestion extends React.Component {

    constructor(props) {
        // Pass props back to parent
        super(props);
		this.state = {
			modalVisible: false,
			modalAnswerState: true,
			modalAnswerCorrect: '',
		};
    }

	closeModal(){
		this.setState({
			modalVisible:false 
			});
		prepareQuestions(this.props);
	}
	


    // Submit book handler
    submitAnswer(answer) {
		
		this.setState({
				modalVisible:true,
				modalAnswerState: (this.props.question[0].answer == answer),
				modalAnswerCorrect: this.props.question[0].answer,
			}, () => console.log(this.state));
		
        
    }

    render() {
        
        if (!this.props.question || this.props.question.length == 0) {
            prepareQuestions(this.props)
        }

        // Title input tracker
        let titleInput;
        // return JSX

        let options = this.props.question[0].options;
		
		var modalTitle = "Yes";
		var modalDesc = "Yes";
		var modalStyle = [styles.innerContainer, styles.correct];
		
		if(this.state.modalAnswerState){
			modalTitle = "Yes!";
			modalDesc = "You got it correct!";
			modalStyle = [styles.innerContainer, styles.correct];
		}
		else{
			modalTitle = "Oh no!";
			modalDesc = "The correct answer is: " + this.state.modalAnswerCorrect;
			modalStyle = [styles.innerContainer, styles.wrong];
		}

        return ( 
            <View style={styles.parent}>
				
				<Modal
					transparent={true}
					visible={ this.state.modalVisible }
					animationType={'slide'}
					onRequestClose={() => this.closeModal()}
					>
					<TouchableOpacity style={ styles.modalContainer }
						onPress={() => {this.closeModal()}}>
						<View style={ modalStyle }>
							<Text style={ [ styles.textTitle, styles.textWhite ] }>{ modalTitle }</Text>
							<Text style={ [ styles.textSubtitle, styles.textWhite ] }>{ modalDesc }</Text>
						</View>
					</TouchableOpacity>
				</Modal>
				
                <View>
                    <Text> { this.props.question[0].question } </Text> 
                </View>

                <View style = { buttonStyles.container } >

                    { options.map((obj, index) => { return <Button key={index} title={obj} onPress={ () => this.submitAnswer(obj) } /> }) }

                </View>
				
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
export default connect(mapStateToProps, mapDispatchToProps)(ScreenQuestion);
//export default ScreenQuestion;