# Uber Eats Sales Academy

An immersive, interactive training game for Uber Eats account representatives to master objection handling and sales techniques. Built with Uber's signature design language and modern UX principles, featuring a professional dark theme inspired by financial calculators.

## ✨ Features

- **Professional Dark Theme**: Clean, sectioned layout with glassmorphism effects, inspired by ubereatscalculator.com
- **Uber-Branded Experience**: Authentic Uber design with signature pink (#FF00BF), black, and white color scheme
- **Interactive Chat Interface**: Realistic conversation simulation with typing effects and message bubbles
- **Dynamic Personas**: 8 diverse restaurant owner characters with custom avatars
- **Real-World Objections**: Practice responses to authentic sales challenges:
  - "We already use DoorDash"
  - "The commission fees are too high"
  - "We're too busy"
  - "We don't need delivery"
- **Smart Response System**: 4 contextual response options per objection with detailed feedback
- **Gamification Elements**:
  - **Streak System**: Build consecutive correct answers for multipliers
  - **Score Multipliers**: Earn up to 3x points for hot streaks
  - **Level Progression**: Advance levels based on total score
  - **Achievement Badges**: Unlock 6 different achievements
  - **Local Leaderboard**: Track your best performances
- **Progress Tracking**: Visual progress bar and real-time scoring
- **Achievement System**: Unlock badges for speed, accuracy, mastery, streaks, perfection, and veteran status
- **Multiple Difficulty Levels**:
  - Easy Mode: 3 scenarios
  - Pro Mode: 5 scenarios
  - Expert Mode: 7 scenarios
- **Performance Analytics**: Comprehensive scoring with personalized feedback
- **Responsive Design**: Optimized for desktop and mobile devices

## 🎮 How to Play

1. **Choose Your Challenge**: Select difficulty level (Easy/Pro/Expert)
2. **Meet the Prospect**: View restaurant owner profile and avatar
3. **Watch the Conversation**: See objections typed out in real-time
4. **Select Your Response**: Choose from animated response bubbles
5. **Build Streaks**: Get consecutive answers right for multipliers
6. **Earn Achievements**: Unlock badges for outstanding performance
7. **Track Progress**: Monitor your score, level, and streak
8. **Review Results**: Get comprehensive performance analysis

## 🚀 Running the Game

### Local Development
```bash
cd uber-eats-training-game
python3 -m http.server 8000
```
Open http://localhost:8000 in your browser

### Direct Opening
Open `index.html` directly in modern web browsers

## 🛠️ Technical Stack

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Advanced animations, gradients, and responsive design
- **Vanilla JavaScript**: ES6+ features, DOM manipulation, and game logic
- **Google Fonts**: Uber Move font family for authentic branding

## 🎯 Learning Objectives

This training game develops essential sales skills:

- **Objection Handling**: Master proven techniques for common barriers
- **Empathy Building**: Learn to acknowledge concerns before responding
- **Value Communication**: Position Uber Eats benefits effectively
- **Active Listening**: Understand prospect needs and motivations
- **Professional Persistence**: Maintain positive relationships during challenges
- **Data-Driven Selling**: Use statistics and success stories strategically

## 🏆 Achievement System

- **⚡ Speed Demon**: Complete scenarios under time pressure
- **🎯 Accuracy Expert**: Maintain 80%+ correct response rate
- **👑 Sales Master**: Perfect score on Expert difficulty
- **🔥 On Fire**: Achieve a 5+ correct answer streak
- **💎 Perfectionist**: 100% accuracy on any difficulty
- **🏆 Veteran**: Complete 10+ training sessions

## 🎮 Gamification Features

- **Streak Counter**: Consecutive correct answers
- **Score Multipliers**: 1x-3x based on streak length
- **Level Progression**: Advance every 50 points
- **Real-time Feedback**: Immediate response validation
- **Persistent Leaderboard**: Local storage of top scores
- **Visual Rewards**: Animated achievements and multipliers

## 📱 Responsive Features

- Mobile-optimized touch interactions
- Adaptive typography and spacing
- Smooth animations across devices
- Progressive enhancement for modern browsers

## 🔧 Customization

### Adding New Personas
```javascript
{ name: "New Owner", description: "Restaurant description", avatar: "NO" }
```

### Creating New Objections
```javascript
{
    text: "New objection text",
    responses: [
        { text: "Response option", correct: true/false, feedback: "Explanation" }
    ]
}
```

### Modifying Difficulty
Adjust `maxScenarios` values in the `startGame()` function

## 📊 Performance Metrics

- Response accuracy percentage
- Average time per scenario
- Achievement completion rate
- Difficulty level progression
- Comprehensive feedback analysis

## 🤝 Contributing

This is an internal Uber Eats training tool. For modifications or enhancements, please follow Uber's development guidelines and accessibility standards.