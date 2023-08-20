export class Notes {
    startStory: string;
    instructions: string;
    current: string;

    constructor(){
        this.startStory = "You were kidnapped three days ago by smugglers during a space mission to Karasir, a desertic planet.\nYou have managed to escape from their prison, steal some water and a very small, half-broken spaceship.\nYou're trying to get back to your camp, but for that you have to cross the desert aboard the spaceship.\nDon't run out of water or you'll die of thirst.\nDon't let the smugglers catch you or they will kill you on the spot.\nDon't forget to let your ship cool down once in a while or it will overheat and explode and you'll die in the middle of nowhere."
        this.instructions = "These are your options:\n1. Drink from your canteen (your water reserve will diminish). You'll die if your thirst goes over 6.2. Ahead moderate speed (you'll get thirstier, and your ship will advance a little but also heat a little). Your ship will explode if the heat goes over 8.3. Ahead full speed (you'll get thirstier, your ship will advance more but also heat more). Your ship will explode if the heat goes over 8.4. Stop to rest (your ship will cool down).5. Restart the game6. Quit the game"
        this.current = this.startStory + "\n\n"+ this.instructions
    }
}