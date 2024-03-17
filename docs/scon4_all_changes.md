---
section: legacy
hide:
  - next
  - prev
  - search
  - tabs
---

# SCON4 All Changes

This page lists all changes in the current version of SCON4 since vanilla GNT4.

## Legend

All directions use numpad notation. For example, 6B is holding forward and pressing B.
5B is pressing B without holding a direction on the stick.


![Numpad](/assets/images/changelog/numpad.jpg)

- RA is running A
- JB is jumping B
- J2A would be jumping, holding down, and pressing A
- 6A(A) means that we are talking about the second A press in the 6A string
- S5X means in Sharingan mode for Sasuke and Kakashi. Similar for other transformations.
- 1C or 2C means charged once or twice respectively
- Act4A means the activated part of a 4A counter. This can also be seen on command grabs such as Tsunade's Jump A as ActJA
- GRKnJ and ARKnJ are ground and air attack substitutions; LKnJ is the non attack version
- 5X8 is an example where the move begins with 5X but needs a press of 8 to do something different. This essentially works like 8X, but it is different solely for comboing into the move as if you input 8X and release the 8, you will do 5X. These moves are seen at the first active frame of the move in most cases
- DI (Directional Input) is on a few air moves. This allows you to hold forward or back as you begin the move to change how your momentum is applied
- Ring is a combo with multiple options depending on direction pressed
- ~ is the transition between moves, so 5A~A is the transition between 5A and the follow-up 5A

## General Changes

- Menus and text have been translated to English
- Screen doesn't slow down on character death
- Music doesn't stop on pause
- Stage select screen has diagrams with sizes for the stages
- Unlocks everything by default
- Stand resets intangibility
- Turn around is three frames faster
- Dash transitions to run on frame 6 (from 8)
- New backdashes instead of back flips
- Landing on your face, bouncing on your back or face, and crumple restores your ability to substitute
- Air and Ground grab breaks have guard frames that guard against normal and special attacks
- Jump land doesn't high crush
- Jump land, throw miss, all landing states, more hit states can be grabbed
- Throws cannot be subbed for the first 10 frames of launch
- All grab breaks are now 4 frames from 3 (except Jirobo clap command grab)
- X cannot grab break
- GRKnJs have at a minimum 17 intangible travel frames and will hit on at least frame 29
- 4As are grabbable the entire duration
- Sleep state (Kabuto 2X) cannot sub until later; resets the combo counter
- Can select which RKnJ you use while in the air. If pressing R, then your character will do the air sub, if pressing 2R then they will do the ground sub
- Getup attacks (WUK) added. If holding A or B on frame 15 of a neutral getup, the character will transition to a get up attack. These are fully intangible for four frames and then immune to mids and highs until the hitbox disappears. They are -21 on block
- Optional default settings changed:
  - 60 to 90 seconds
- Training default settings changed:
  - 2P Action changed to 2P Control
  - Chakra Recovery changed to OFF
  - Show Inputs changed to OFF
- Added new blood texture for certain types of damage
- All hitstun states cannot high crush anymore (low hitting counter attacks)
- HP Pools have been normalized, to reduce variance
- Airborne Guard Break status has been made more dangerous to the victim. It can no longer be tech rolled, and the ability to shake out of it has been reduced to a minimum of 40 frames (from 30)
- Grounded Guard Break ability to shake out was reduced to a minimum of 40 frames (from 30)
- Running side steps have been given the ability to track onto the opponent from any distance, these were modelled after those in REV3 to allow new uses for offensive approaching and counterplaying chicken blocking. This also allows running step to turn around to face the opponent when back turned.
- It was determined that the defensive power of Jump-Back was too powerful and made the game overly defensive. Many new system mechanics hope to provide universal counterplay to jumping for all characters.

Note: 3-Man Cell is currently non-functional.

## Stage Changes

- Silent Shrine over Fog Bridge
- Heaven and Earth Bridge over Ice World
- Cell Games over Uchiha District
- Asian Gate over Chuunin Roof
- Aquarium over Hot Springs
- Gamecube Galaxy over Sunset Ramen

## Character Changes

### Naruto

![Naruto](/assets/images/changelog/naruto.png)

- Grabbable Moves: JA, 8A, Z2A
- 5B elbow hitbox appears on frame 2
- 5B(B) hand hitbox does not appear until frame 2
- 5BB(B)
  - Can be done with 8B to do 8B
  - Can be delayed three more frames
- 5BBB(B)
  - Can be replaced with the clone active version with 8B
  - Can be delayed three more frames
- 5BBB(8B) does not lift on block
- 5BBBB(B)
  - Does slightly more damage
  - Pushes further away
  - Doesn't teleport as far
  - Intangible for eight more frames
  - Travels slightly lower and more directly upwards
  - Hitbox appears two frames sooner
  - Hand hitboxes bigger
- 5BBBB(A) added as 8A
- 5BAA(A) starts up and ends one frame later; staggers
- 6B has an untechable bounce after the first active frame; first frame is a high; properly low and high crushes; elbow hitboxes appear on second active frame
- 4B bounces closer
- 8B
 - Hitbox appears two frames later
 - Both hitboxes increased in size
 - More lift
- 6A(A) and 6A(8A) added as 2A and 8A
- 2A has a new animation
- 2B has less lift
- RA has more lift
- RA(A)
  - Does not lift anymore
  - Has 6 additional recovery frames (on hit only)
  - Hitbox appears one frame later
- RAA(A)
  - Hitboxes adjusted to hit more consistently from previous move
  - Low crushes
  - "lands" one frame sooner
  - Slightly more lift
- RAAA(A)
  - Is a hard knockdown
  - Less lift
- 5X6 activates into 5X and uses 6B attack; has a different super freeze animation; low and high crushes
- 2X has less super freeze and more duration
- 4X requires 50% meter; has more lift

And for Naruto's ZTK transformation:

- Takes 1.25x as much damage (instead of 1.5x); no passive health drain and passive meter gain reduced to 2 units per frame (from 40)
- Health drain is paused during activated super
- 5BBBB(B) bounces closer
- 5BA(B) has more lift, hitbox appears three frames later, made normal lift instead of spinning
- 5BAB(B) transition happens three frames faster
- 5BAA(A) replaced with 8A
- 5BAAA(A) replaced with 8A(A)
- 5A given more float
- 5A(A) given more float and super cancellable
- 5A~A is -1 (from -7) (5A is now +7 on hit)
- 6B low crushes
- 8A
  - Has slightly more vertical range on the bottom
  - Hitbox appears 1 frame earlier
  - Disappears 1 frame earlier
  - On hit will "face" the opponent
- 8B lifts on block
- 8B(B) has more lift
- 8B(A) added
- 6A given more float and super cancellable
- 4A window improved
- Act4A goes into RA
- 2A does activated 4A, adjustments to size; duration; and hitbox
- 8A(A) does slightly more damage and doesn't bounce
- RA ends 4 frames sooner; has three grabbable frames at the beginning
- 5X
  - Requires 75%
  - Third to last hit staggers
  - Second to last hit doesn't jump as far forward
  - Fixed animation glitch (added one hit)
  - First hit lift adjusted to not sometimes reset the combo
  - One less frame super freeze
  - Victim has other hit types
- 5X6 uses 6B attack into Z5X; has a different super freeze animation
- 6X hitbbox appears one frame later; one less super freeze frame

### OTK Naruto

![OTK Naruto](/assets/images/changelog/otk.png)

- Health: 220 > 190
- Grabbable Moves: 6A, JA, 2B(A), 8A landing
- 5B has more blockstun
- 5B(B) hitbox appears one frame later
- 5BBB(A) bounces (8BA and such don't)
- 4B2A is 2BA with 6 additional startup frames
- 2B(A) changed to be 6A, 2B2A added as old 2BA
- 2BB(B) cannot be done after OTK touches the ground from 2B(B)
- 8B(A) has 8 frames less blockstun; cannot be transfered into after hitting the ground
- 8B(B) follow up timing changed to match 2B(B)
- 8BB(B) damage reduced from 18 to 16
- 8BBBB; 8BBBA added as new strings to match 5BBBBBB and 5BBBBBA
- JA changed to be 8B(A) like Lee JA and current JA made to be J2A
- 4A given a better window
- Act4A has a slightly smaller hitbox and made to do more damage and be unsubbable and untechable
- 2A hitbox appears one frame later
- 8A on block or OTG "lands" 11 frames later; has two more frames endlag; actually low crushes the frame before the hitbox appears; can be subbed after hitting the ground
- A8A victim transitions to get up 14 frames faster; OTK is hittable and grabbable shortly after he does damage
- RA, 6BAA(A) given three grabbable frames before the teleport
- 2X high crush frames removed
- GRKnJ not intangible anymore

#### Cosmetic

- Fixed a GFX glitch on Act4A
- 8A GFX and SFX adjuted on "landing" when blocked

### Sasuke

![Sasuke](/assets/images/changelog/sasuke.png)

- Health: 210 > 215
- Grabbable Moves: JA, RA, 8A, 6A, 8B landing, SJX, S8X
- 5B is super cancellable; elbow hitbox removed; fist hitbox made larger on second active frame
- 5B(B) hitbox appears and disappears one frame later
- 5BBBB(B) has more lift
- 5BBBBB(B) appears one frame sooner and disappears 3 frames sooner, bounces closer
- 6B hand hitbox does not appear on the first frame
- 6B(B) slightly more lift
- 6BB(B) changed to be 5BBB(B) with A follow up only
- 2B
  - Launch instead of sweep
  - +2 damage
- 2B(B) changed to be 5BB(B)
- 2BB(B) added as old 2B(B) with slightly more lift
- 8B cannot be subbed until later
- A8B is hittable after releasing the opponent
- 5A charge changed from 10f to 8f
- 6A
  - Is grabbable until release
  - Has better tracking on startup
- 4A
  - Hitbox starts up much later to match the animation
  - Staggers
  - Ends earlier
  - Sped up recovery on hit
- 2A hitbox appears three frames later
- 2A(A) staggers
- 2AA(A) does 6A
- RA
  - Can now be done at any time during run and does not have to wait for a looped animation to begin
  - First projectile appears one frame sooner
  - Gap between the two changed to be 1 frame (from 2)
- 2Y throw added that knocks down
- GRKnJ travels one frame slower; appears slightly further back
- 4Z disabled

And for Sasuke's sharingan transformation:

- 5BBB(B) has one more hitbox duration frame to better match the animation
- 4A counter window sped up
- Act4A cannot be subbed (TODO: Is this same as vanilla?)
- RA has three grabbable startup frames
- 5X
  - Adjustments to duration, sizes, and damage is applied on the cinematic portion
  - Does 10+65 from 10+50
  - Has three (TODO: four now?) frames less super freeze for Sasuke
  - Reduced from 100 to 76 frames
  - Activator hitbox extended by one frame
  - Bigger hand hitbox
  - Does not push on block (Ukon)
- 5X8
  - Added with anti air chidori that does 10+60
- SJX fireballs have slightly more lift and stagger
- S8X added doing a modified SJX

#### Cosmetic

- 8B GFX and SFX adjusted on "landing" when blocked
- Air thrown animation added in properly

### CS2 Sasuke

![CS2 Sasuke](/assets/images/changelog/cs2.png)

- Health: 220 to 200
- Grabbable Moves: 6A, 2A, JA, 8B landing
- 5B hitbox appears one frame later, elbow hitbox does not appear on frame 1
- 5B(B) hitbox appears one frame later; slightly less lift
- 4B
  - Hitbox appears one frame later to better match the animation
  - Can be grabbed on startup
  - Moves and appears 3 frames sooner
  - Same strike timing
  - Can be grabbed on landing
- 2B(B) launches higher, launches on block, hitbox appears later
- 8A
  - Damage and block damage reduced from 14,10,10,10 to 9,6,6,6
  - Remove ending high crush and standing in the air (had no purpose)
- 8B cannot be subbed until later
- A8B is hittable after releasing the opponent
- 5A hitbox appears two frames later
- 5A(A) adjusted high crush frames to make more sense
- 6A animation adjusted to not look so jumpy; combos into this timing adjusted
- 4A window improved
- Act4A unblockable
- 2A damages adjusted: 0C (15 to 11); 1C (15 to 13); 2C: (15)
- RA, RA(A) given three grabbable frames at the startup before the teleport
- JA now builds meter and lifts airborne opponents; can be subbed and teched
- 2X comes out faster, requires and uses 75%; damage reduced from 80 to 60
- GRKnJ moved backwards

#### Cosmetic

- Air thrown animation added in properly

### Sakura

![Sakura](/assets/images/changelog/sakura.png)

- Health: 185 to 205
- Guard: 1480 to 1640
- Grabbable Moves: 5A(A), 5AA(A), 8(A), 8B(A), JA, JA(A), JAA(A)
- Throw has a new animation and does damage
- 5B has more lift; elbow hitbox appears on second active frame; slightly bigger hitbox
- 5B(B) shoulder hitbox slightly smaller, hitbox appears and disappears one frame later
- 5BB(B) "lands" two frames sooner; ends 9 frames sooner
- 5BB(A) input can now be buffered up to 23 like in vanilla, but also can be input anytime to the end of the move; cannot follow up on whiff
- 5BBB(B) is a hard knockdown
- 6A(B) transition delayed 5 frames; has a closer hit
- 6B flags adjusted to better match the animation
- 6B(B)
  - Flags adjusted to better match the animation
  - Has more lift
- 4B cannot be followed up on on whiff
- 4B(B)
  - Has flying screen added
  - Hitbox appears one frame earlier
  - Launches spinning upwards
- 4B(A) replaced with a custom 2A; does not lift on block
- 4BA(B) launches away
- 4BAA(A) added as RA
- 2B launches instead of sweeps
- 8B
  - Lift decreased
  - Duration adjusted to fit the animation better
  - Damage increased by 1
  - Ends sooner
  - "lands" two frames earlier
- 8B(B) flying screen removed, adjusted lift, size, and duration
- 8B(A) made 5A with follow ups
- 5AA(A) staggers
- 5A2C staggers
- 6A has old 6A startup, but teleports up and behind the opponent; has strings into A and B
- 2A cannot be followed up on on whiff
- 2A(B)
  - Added
  - This move and similar moves do not move as far forward on startup
- 2AA(A) replaced with RA
- 8A spaced out the projectiles more; projectiles do not lift off the ground
- RA has three grabbable frames added to the startup
- RB
  - Made an untechable bounce and a high for the first two frames
  - Techable and mid after the first two frames
  - Hitbox disappears two frames sooner
- JA can transition faster; has forward or backwards momentum with 6 or 4
- JA(A) air momentum changed, can transition faster; has forward or backwards momentum with 6 or 4
- JAA(A) has forward or backwards momentum with 6 or 4
- 2Y throw added; 30 damage and knockdown
- 5X is vanilla with one more frame duration on hitbox
- 2X has better super freeze, hitbox appears one frame sooner and disappears two frames later
- 4X is a real time super with startup immunity to mids and highs
- GRKnJ bounce changed to be closer; travels one frame faster
- 4Z disabled

### Kakashi

![Kakashi](/assets/images/changelog/kakashi.png)

- Kakashi takes 1.25x damage in sharingan mode
- Alternate costume changed to be ANBU Kakashi
- Grabbable moves: 8A, JA, RA, 5A, 2A landing
- 5B: hitbox appears one frame sooner, slightly smaller hand hitbox; elbow hitbox removed; hand hitbox larger on frame 2; Sharingan mode has 2 more frames of block stun
- 5B(B)
  - Has increased stun
  - Hitbox appears and disappears one frame later
  - Has one extra block frame
- 5BB(B)
  - Has more lift
  - Recovers two frames faster on block only
  - Second active frame (to the end) of the hitbox lifts on block
- 5BB(A) route added as a 6A that staggers
- 5BB(6A) is added as a kunai dash
- 5BBB(B) has 5 more damage and is a hard knockdown
- 5BBB(A)
  - Hitbox size adjusted
  - Hitbox added to shoulder and made slightly bigger
  - Doesn't lift on block
  - More lift
- SBB(B) is super cancellable and staggers; hitbox appears one frame sooner with one more frame of block stun
- SBBB(B) comes out one frame slower
- 6A
  - Hitbox on the hand slightly bigger to better match the kunai
  - Has more lift
- 6B hitbox appears one frame earlier, more lift to match S6B's second hit
- S6B
  - First hit has slightly more blockstun
  - Second hit pushes on block with a slightly bigger knee hitbox
  - Hitbox disappears one frame earlier
  - Has no pushback on the second hit and a slightly improved hitbox
- S6A
  - First hit has more lift
  - First hit has +7 frames of blockstun
  - 2 more frames on duration
  - Hitbox on the hand slightly bigger to better match the kunai
- S2B
  - Moves forward on start up
  - Improved hitbox
  - Crushes three frames earlier
- 4B floats higher
- 8B hitbox appears two frames later
- RB
  - Is super cancellable
  - High crushes frame 6 (from 1)
- JB is super cancellable, better descent angle
- 4A uses animation from stance cancel
- S4A has 9 additional frames added to the activator to better match the animation
- Act4A moves into launch hit faster, unblockable
- SAct4A changed Mizuki 5X properly copied
- A2A is hittable at the peak of the jump
- 5X
  - Duration improved from 1 frame to 7
  - Fully charged from 1 to 8
  - Damage adjusted to the cinematic portion of the attack
  - Full charge reduced from 100 to 76 frames
  - All hand hitboxes bigger
- J2Y Air Throw is custom; non sharingan version puts Kakashi in sharingan mode and does not build meter, requires and costs 25% meter; in sharigan it does more damage and builds meter
- S5X is 5X; on transition to capture state leaves sharingan mode; requires and costs 75%
- S2X is vanilla S5X, activator duration increased by 2 frames; damage reduced slightly; on transition to capture state leaves sharingan mode
- 4X requires and costs 25%
- 2A adds hits to the combo meter; +1 damage; can now be grabbed on landing on successful hit; cannot be cancelled
- GRKnJ travels two frames slower; appears further back
- 4Z disabled

#### Cosmetic

- SAct4A on Iruka and Mizuki 5X hands fixed

### Neji

![Neji](/assets/images/changelog/neji.png)

- Grabbable Moves: 8A, JA
- 5B elbow hitbox appears on frame 2; slightly smaller
- 5B(B) hitbox appears and disappears one frame later
- 5BBB(A) is a custom capture state move
- 5BBBB(A) damage increased from 14 to 20
- 4B remove stagger, made strong, more stun
- 2B(B) changed with 5BBB(B) with A follow up
- 8B more lift, hitbox appears later, no Y cancel
- RB replaced with RA with B follow ups
- RB(B) can be done on whiff; transition is 5 frames slower
- 5A charge time reduced from 11 frames to 8
- 6A launches on the last hit, damage and lift adjusted; first two hits juggle slightly better without a wall
- Act4A unblockable and unsubbable
- 2A(A) added as 6A
- RA is a custom poke
- 5X starts moving 3 frames sooner, activates if only hitting the second hit; first hit turns back turned opponents around
- 2X has slightly less lift

### Rock Lee

![Rock Lee](/assets/images/changelog/lee.png)

- Health: 225 to 220
- Works like a level up character with 2G mode having no passive lift or meter drain
  - Damages adjusted between all forms:
    - 5B: 9,13,17 > 9,12,15
    - 6B: 11, 17, 22 > 11,15,19
    - 4B: 12,18,23 > 12,16,20
    - 4B1C: 18, 27, 35 > 18,26,34
    - 2B: 10,15,19 > 10,14,18
    - RB: 15,22,28 > 15,21,27
    - 5A: 11,17,22 > 11,15,19
    - 6A: 9,14,18; 18, 24, 30 > 9,13,17 > 18,22,26
    - 2A: 11,17,22 > 11,15,19
    - JB: 21,28,34 > 21,25,29
    - JA: 13,19,24 > 13,17,21
    - 8B: 8,12,15
    - 8A: 0,7,9; 10,13,17 > 0,7,9; 10,12,14
    - 5BB: 8,12,15
    - 6BA: 18,26,30 > 18,22,26
    - 4BB: 12,18,23 > 12,16,20
    - 5BBAA: 15,22,28 > 15,19,23
    - 8BA: 15,22,28 > 15,19,23
    - 5BBA: 12,22,28 > 12,16,20
- 6B(A), JB, 6A second hit, 8A, Throw damage adjusted across the three states
- 5B has more lift
- 5B(B) recovers one frame slower on hit
- 5B(A) added as 5A with 5B(B) follow ups
- 5BB(A) hitbox has one more frame duration to better match the animation
- 5BBA(A) has more lift and a hyuuga cancel before he leaves the ground
- 6B replaced with 4B(B) animation, no launch, when done in a combo does vanilla 6B that ends 6 frames sooner
- 6B(A) Hyuuga cancel added
  - 1G: Untechable knockdown
  - 2G: Untechable bounce
- 4B charged:
  - 1G: 3x guard damage
  - 2G: Instant guard break
- 4B(B) high crush from 13-36
- 2B changed to be strong on hit and block
- 8B first hit lifts on block
- JB has slighty adjusted launch direction and slightly more lift
- 5A has more lift
  - Is super cancellable in all gates
  - Turns the opponent around on back turned
	- 1G: Deflects projectiles
	- 2G: Staggers
- 6A first hit strong, lifts higher, direction of hit changed; second hit size increased; "lands" three frames later
  - 1G: First hit lifts on block, second hit pushes on block
  - 2G: Second hit hard knockdown
- 4A window is increased
- Act4A cannot be subbed at all (TODO: Was this ever possible?)
- 2A has more lift
  - 1G: Ends sooner
  - 2G: Lifts instead of sweeps
- 8A has more block damage, made strong on block
  - 1G: Has an initial hit on the way up
  - 2G: Untechable bounce on the second hit
- RA is:
  - 0G: unchanged
  - 1G: a set distance teleport; can be grabbed after Lee reappears
  - 2G: a set distance appearance teleport and less startup than 1G; can be grabbed after Lee reappears
- JY:
  - 0G: Nothing
  - 1G: Normal Air throw
  - 2G: Special lotus air throw
- 5X does Gaara version of the super on everyone, damage is 55; activator does 10 damage; 0G and 1G activator has +1 frame duration
- 1G5X does 65 damage with the vanilla version; activator does 10 damage
- 2G5X does 110 damage from 146
- 4X requires 50% and takes 50%
  - 1G 4X is a hard knockdown
- 1G4X requires and costs 75% meter
- GRKnJ moved further back on appearance
- GRKnJ made a mid from a high

### Tenten

![Tenten](/assets/images/changelog/tenten.png)

- Health: 185 to 205
- Guard: 1480 to 1640
- New idle animation
- Grabbable Moves: 5BB(A), 5BBB(A), 5AC(A), 5A2CA(A), 4A, 8A, RA, JA, JA(A), JAA(A), JAAA(A), JX, 8X
- 5B hand hitbox does not appear on the first frame; better advantage on block, more lift
- 5B(B) appears and disappears a frame later, better advantage on block, more lift
- 5BB(A) and 5BBB(A) are both 5BB(A), but 2A does 5BBB(A)
- 5BB(A) has 7 additional endlag frames on landing
- 5BB(2A) has 7 additional endlag frames on landing
- 5BBB(B) more lift
- 6BB(B) does the spinning knockdown
- 2B sweeps; less lift
- 2B(B) has more lift; less lift TODO: is it more or less than vanilla now?
- 2B(A) has less hitbox duration
- 2BB(B) is an untechable bounce, pushes on block
- 2BA(B) transition with B changed to be frames 32 (vanilla start) - 35 (when the second foot makes a dust cloud)
- 2BAA(A) added as 2A(A)
- 8B
  - Ends sooner
  - Has more lift
  - Faster recovery on hit or block only
- RB made strong and pushes on block
- JB has one more frame active hitbox
- 6A made a techable bounce for the first frame only (instead of the whole move); made a high for first frame only; hitbox appears one frame sooner; hitboxes slightly smaller; stuns longer on hit
- 6A(A) can now be done on whiff
- 6AB does 6B
- 4A activates automatically
- Act4A does not high crush, can be grabbed
- RA can now be done at anytime during run and does not have to wait for a loop of the animation
- JA can transition faster; has forward or backwards momentum with 6 or 4
- JA(A) can transition faster; has forward or backwards momentum with 6 or 4;
- JAA(A) can transition faster; has forward or backwards momentum with 6 or 4;
- JAAA(A) can transition faster; has forward or backwards momentum with 6 or 4; sickles do more damage (TODO: This still true?)
- JAAAA(X) added as JX when having 75% meter
- 5X hitbox comes out two frames later and disappears one frame later, starts moving two frames earlier, bigger hitbox
- 8X does JX from the ground with modified momentum; requires and costs 75%
- J6X added where TenTen hops slightly forward before doing the super instead of slightly back
- GRKnJ moved further back
- GRKnJ made a mid from a high

### Might Guy

![Might Guy](/assets/images/changelog/guy.png)

- 5B has more lift
- 5B(B) has an additional endlag frame on hit to prevent 5BB infinite
- 5BB(A) hitbox duration increased by one frame to better match the animation
- 5BBA(A) has more lift
- 6B animation changed to be the 4B(B) animation and staggers, when done in combo it is vanilla
- 6B(A) has more lift, is super cancellable, less blockstun; if holding 6 when it comes out does 6A
- 2B hitbox duration increased by 1 frame, launches, lift adjusted
- 8A teleports in front of the opponent; can be grabbed; cannot do follow ups on whiff
- 8B both hits have slightly more lift; two less frames recovery on landing
- 8B(B) added as JB
- RB: Changed to be strong on block, launches upwards, hitbox duration increased by 8 frames
- JB doesn't float as high in the startup; has slightly more height and launch angle change
- 5A: Is super cancellable, turns back turned opponents around; slightly more lift
- 6A: Second hit launches far and away, Y cancel removed
- 4A window improved, can move immediately on appearance
- 2A launches instead of sweeps with more lift
- Throw works both sides; throw does 20 damage with no gate or 1 gate open
- 2Y does a knockdown throw that does 30 damage
- 5X slightly bigger shoulder hitbox, more duration, begins moving 2 frames sooner, activator does 10 damage in both gated form; damage on activation changed from 71 to 66 and 81
- 2X can be done with no gates open, activator does 10 damage in both gate forms; activated does 72 and 87 damage from 90
- RKnJ made to work like RB
- GRKnJ changed to be a mid from a high

### Shikamaru

![Shikamaru](/assets/images/changelog/shikamaru.png)

- Health: 200 to 205
- Grabbable Moves: 8A, JA
- 5B ends two frames earlier
- 5BB(A) launches with more lift, one frame less on the hitbox
- 6A has +1 frame hitbox duration
- 6B made a sweep, less lift
- 6B(B) more lift
- 2BBB(B) ends sooner and has more lift
- 8B replaced by a modified SBB(B) with better knockback, high crush 7-15
- 8B(A) can only be done after landing
- RB starts up three frames later
- 4A
  - Has faster action and high crushes at frame 6
  - Is super cancellable
  - Initiates follow on inputs three frames later
- 4A(A) animation starts up 3 frames faster
- 4A(B) teleport travels 3 frames faster
- 4A(X) input initiates 3 frames earlier
- 4A(Y)
  - Recovers faster
  - Input initiates 3 frames earlier
- 2A not in a string is an untechable sweep
- SB: Remove stagger, more lift; can be done with 6 to change sides or 2 to empty teleport; can be grabbed before the teleport; slightly less stun
- SB(B) more lift
- SBB(B) replaced with SABB(B)
- SA can be done with 6 to change sides or 2 to empty teleport; can be grabbed before the teleport; has a puff of smoke on reappearance on both sides; disappears two frames slower (same travel time) and closes hand before teleporting
- SABB(B) more damage
- SA(A) staggers
- SAA(A) replaced with 8A
- S2B and S2A are both empty teleports
- 5X starts moving 4 frames sooner in super freeze
- 2X has less super freeze and comes out faster, can move faster when hitting from further away than right next to the opponent, opponent falls slower, opponent cannot sub until they hit the ground or are hit; resets combo counter
- S6B stays in front; SB goes behind

### Chouji

![Chouji](/assets/images/changelog/choji.png)

- Overall: When large, Chouji has guard frames and is grabbable
- Faster run
- 2A chips increase Chouji's strength. He requires 8 chips to get to his maximum strength which is 1.5x. He also loses chip gains for certain moves which are:
  - 1: GRKnJ
  - 2: 6A, Act4A, RA, JA
  - 4: 5X, 2X, 4X
- Health: 225 to 240
- Guard: 1800 to 1920
- 5A
  - Has one (TODO two?) more frame hitbox duration
  - Cannot be cancelled
  - Super armor ends frame 30 (from 55)
  - Damage increased from 25 to 30
  - Throw trajectory changed
- 5B has slightly more stun on hit and block; transition to 5B(A) is one frame faster
- 5B(B) has slightly more lift, shoulder hitbox does not appear on the first frame, SFX comes out one frame later, 3 frames less disadvantage on block
- 5B(A) hitbox appears one frame sooner; transitions one frame faster
- 5BA(A) added as 2A
- 5BB(B) and 8B is an uppercut
- 5BBB(B) and 8B(B) is also an uppercut, but has spinning knockback and hits higher
- 6B damage (+3) and stun increased
- 6B(B) is the strong uppercut (8B(B))
- 6B(A) is a small bounce instead of stagger
- 6BA(A) replaced with chips
- 4B
  - Untechable and high for the first two frames of the hitbox, then mid and techable
  - Hitbox appears and disappears one frame later
  - Hitboxes are slightly larger
  - High crushes frames 46 - 69; 69 is last follow up frame for B
  - Frame 70 to the end is the A extension
- 4B(B) "stands" for four frames before going airborne; "lands" two frames sooner
- 4B(A) extension added, corresponds to 2A
- 8A
  - Hitboxes adjusted to not grab behind as easily
  - Super armor ends when Chouji leaves the ground
  - Hitboxes appear 4 frames earlier (TODO 2 now?)
  - Damage changed from 40 to 30
  - Opponent can sub after Chouji removes his hands from the opponent
  - Carries forward on capture
  - Activates if blocked (Ukon)
- 8B to 8B(B) transition is slightly slower
- 8B(A) is 8A
- 8B(B) ends three frames sooner
- RB ends sooner
- A5A is hittable after Chouji throws the opponent
- 6A links into the final hit better, ending hits twice, the first is a bounce and second hit is a hard knockdown, knockbacks cleaned up to not be as severe
- 4A counter window improved, can be activated from all sides
- Act4A is unblockable and unsubbable, slight adjustment to size, damage increase 20 to 25
- 2B starts high crush 2 frames sooner and ends 8 frames later
- 2A maxes out strength (1.5x) at 6 chips from 13. Builds 1/16th of a bar of meter
- A8A is hittable after Chouji gets off the opponent
- RA size adjusted, hitbox duration better matches animation, pushes on block
- JA does increased guard damage, falls faster, hard knockdown, pushes on block, size adjusted, can be DIed forward or backward
- JY added, does a modified A8A animation
- GRKnJ size adjusted to match RA
- 5X starts moving 4 frames sooner during super freeze
- 4X is a real time super similar to Act4A with immunity to highs and mids on startup; requires and uses 75%, does not gain meter, is blockable
- 2Y added
- 4Z disabled

#### Cosmetic

- 4A hand signs are removed when Chouji can no longer counter

### Ino

![Ino](/assets/images/changelog/ino.png)

- Health: 185 to 205
- Guard: 1480 to 1640
- Grabbable Moves: 8A, JA
- 5B shoulder hitbox does not appear on the first active frame
- 5B(B) hitbox appears and disappears one frame later; can do 8B instead
- 5BB(A) does a delayed 6A
- 5BB(B) launches on hit and block, lift and direction adjusted; can do 8B instead
- 5BBB(A) has three grabbable frames at the startup; can press 4 before the teleport stay on the same side
- 5BBBB2B does 4BB(B)
- 5BBBBB(B) has more lift
- 6B increased lift, ends quicker, does not lift on block; has more lift when not in a string
- 6B(B) has three grabbable frames at the startup before the teleport; can change direction with 4B
- 4B bounces closer to Ino
- 4BB(B) adjustments to hitbox timing, landing, and crush. High crushes on landing
- 8B
  - Is a backflip with no hitbox
  - Strings can be followed up from it
  - Has one less frame animation startup and one frame more recovery
- JB hitbox appears 1 frame later and disappeares 3 frames later
- JB(B) and JB(2B) are strings
- 5A charge time decreased to 7 frames from 11
- 4A has an improved window
- Act4A is unblockable, hard knockdown, and is sped up with the hitboxes increased in size and damage (15 to 20); teleports slightly more behind the opponent
- 2AB(B) transition timing adjusted to match 6B(B); cannot transition upon landing
- RA hit sizes increased with more stun on hit
- JA in combos teleports with 6 or 4
- Throw has a new animation; does 20 damage
- 2Y throw has a new animation; does 20 damage and side switches
- JY added
- 5X is a close range attack with less recovery on miss
- 2X does vanilla 5X activator into vanilla 2X activated; starts moving slightly sooner; slightly less damage
- 4X is a real time super with startup immunity to highs and mids that knocks away
- GRKnJ travels one frame slower; transitioned to be further from the opponent on reappearance, more lift, changed to be a mid from a high
- Win pose against Sakura properly closes both hands

### Shino

![Shino](/assets/images/changelog/shino.png)

- Health: 195 to 205
- Guard: 1560 to 1640
- Grabbable Moves: 5BB(A), 6A, JA
- 5B(B) hitbox appears and disappears one frame later
- 5BB(B) lifts on hit and block, ends sooner
- 6A(A) added as 5A
- 6B(B) given stagger
- 6BBA(8B) added as 8B
- 6BB(B)
  - Has one less active hitbox frame
  - Has slightly more lift
  - Bounces
  - 7 frames less recovery
- 6BBA(B)
  - Has two more frames duration on the hitbox
  - Can be transitioned into quickly
  - Slightly more lift
  - One frame duration taken off the end
- 6BBAB(B)
    - Transition from 6BBAB is two frames faster
    - Now bounces
- 6BBAB(A) transition from 6BBAB is two frames faster
- 4B hitbox appears 1 frame sooner
- 4B(B) launches on hit, ends sooner
- 4B(A) changed to be 6A
- 2B made strong
- 2B(B) has more lift and ends sooner; hitbox appears and disappears one frame later
- 8B
  - Does 1 more damage
  - Ends sooner
  - Hitbox appears one frame later and disappears one frame earlier
  - Hard knockdown
  - Hitbox added to neck
  - Flags adjusted to "land" sooner
- RB
  - Duration changed
  - Ends sooner
  - Flags cleaned up to better match the animation
- RB(A)
  - Transition can happen until the frame before Shino touches the ground
  - Has less backward and upwards momentum
- JB given a better decent angle; more lift
- 5A charges in 14 frames from 27
- 6A releases bugs slightly sooner, hits 5 times instead of 3, more range
- 4A better counter window
- Act4A recovers significantly faster, walking bugs are unblockable
- 2A comes out faster
- 8A comes out faster
- RA replaced with a set distance teleport
- JA has bugs come out one frame sooner and hits 5 times instead of 3
- JY added
- Thrown by Shino 5Y is immune to mids and highs during the startup
- 2Y
  - Added
  - Victim is immune to mids and highs until they are released
  - First bug lifts
  - Bug hitboxes travel slower
  - Cannot sub until hit by the first bug (Follow up consistency has been improved)
- 5X
  - Hitbox appears one frame sooner
  - One less frame of super freeze (TODO: Now 2 less?)
  - Hitbox appears one frame later (better range)
- 2X
  - Bugs spawn faster
  - Each hit does 1 more damage
  - Slightly less lift
  - Hitbox travels slightly more vertically to improve consistency

### Kiba

![Kiba](/assets/images/changelog/kiba.png)

- Health: 200 to 205
- Guard: 1600 to 1640
- Grabbable moves: 8A, JA, JB(B) ending
- 5B hitbox appears and disappears one frame later; shoulder hitbox does not appear on the first frame
- 5B(B)
  - Hitbox appears one frame later and disappears one frame sooner
  - Improved disadvantage on block (TODO: Same as vanilla now? hit and block frame data remains the same)
  - Ends sooner
  - Recovers sooner
- 5BB(A) does not launch, has more stun
- 5BBA(A) launches higher and recovers sooner
- 5BBB(A) hitbox appears one frame sooner and disappears two frames sooner, more lift
- 6A changed to be 5BBB(A) with A follow up (old 6A)
- 6B(B) bounces closer; recovers one frame sooner; does 4 more damage
- 6B(2A) added as 5A
- 4B staggers instead of bounces
- 2B has more lift
- 5A can be grabbed the entire animation
- 5A Kunai cannot "charge"
- 4A better window
- Act4A ends a bit faster, unblockable, does more damage
- 2A Akamaru startup adjusted; is active after 9 frames instead of after 1
- RA(B) changed to be 6B with follow ups
- 5X6 does Kidomaru's 5X activator into vanilla 5X, low crushes; has a unique super freeze animation
- GRKnJ travels two frames slower
- If holding X after super freeze ends on 2X, Akamaru will jump. Akamaru has more lift

#### Cosmetic

- 4A hand sign is put away on ending

### Hinata

![Hinata](/assets/images/changelog/hinata.png)

- Health: 185 to 205
- Guard: 1480 to 1520
- Combo list updated:
  - 5BBA(A), 6A(A) added to the combo strings
- Y Cancel uses the same animation as 2X
- Grabbable moves: 8A, JA, 2X
- 5B Hitbox appears one frame sooner, more generous hitbox, 1 frame more block stun
- 5B(B) hitbox appears and disappears one frame later
- 5BB(A) has stagger, has one more frame blockstun, turns better on hit
- 5BBBB(6B) is RB
- 6B
  - Has one more frame blockstun
  - Has a bit more forward momentum to increase range
  - High crush added frames 15-37
- 6B(B) has one more frame blockstun and is super cancellable; HC is four frames sooner
- 6BBB(B) and 6BBB(6B) added
- 6A(A) is a multi hitting attack before it launches away
- 4B no longer staggers or pushes block, significantly stronger on hit and block
- 2B
  - Has slightly less lift
  - High crushes from 14-40 to better match the visuals
  - Hand hitbox appears on second active frame
- 2B(B)
  - Changed to be 5BB(B) with A follow up intact
  - Change of hit angle to assist back turn combos
- 8B second hit lifts on block, both hitboxes appear one frame later, slightly bigger hitboxes on the second hit; recovers slightly faster
- RB
  - Does 5BBB(B) when done in a string; with the A follow up intact
  - Damage increased from 18 to 19
  - Pushes on block with 4 more frames of blockstun
  - Has more backwards momentum on step back (41-51)
  - Hitbox is active for 5 more frames (2 to 7)
- RA damage reduced from 19 to 15
- 5A charge changed from 11f to 8f
- 4A uses the same animation as 2X, starts up 4 frames sooner, ends 8 frames later
- Act4A cannot be subbed at all (TODO: was this always the case?)
- 6A stagger added, turns better on hit, more lift, first three frames are intangible
- 2A(A) added as 6A(A)
- 5X damage increased from 65 to 80, starts moving in super freeze three frames sooner; two more active hitbox frames
- 2X requires 75% meter to use, window starts up 3 frames faster and ends when the animation starts to change like other counters; drains slightly more than 12.5% meter on a miss at the end of the move; activation gives opponent no chakra on hit (TODO 2X now loses meter when she can no longer counter instead of the end of the move?)
- GRKnJ made into RA; appears closer to the opponent; lift reduced slightly
- JB
  - Goes a shorter distance when you release B in the first few frames (short hop)
  - Both distances have slightly faster fall at the end
  - Hitbox on the elbow moved to the knee
- 9B does not do instant RB anymore
- 5BB6B / 2B6B extension has been added as RB

#### Cosmetic

- Y cancel fingers adjusted

### Awakened Hinata

![Awakened Hinata](/assets/images/changelog/woke.png)

- Guard: 1760 to 1800
- Grabbable Moves: 8A, JA, 2X
- 5B(B) hitbox appears and disappears one frame later
- 5BB(A) turns better on hit; given same stun as 6A
- 5BBBB(A) damage increased from 12 to 20
- 4B remove stagger and push on block; has +3 guard frames
- 8B appears one frame later, slightly bigger hitboxes on the second hit
- RB given hyuuga cancel
- JB can be adjusted to go further or less far with holding 4 or 6
- 5A charge changed from 11f to 8f
- 6A: Turns better on hit; intangible on the first three frames; no intangible in combos
- 6A(A)
  - Damage increased from 15 to 20
  - Drains chakra on hit
- 4A drains meter at a rate of 120 units per frame instead of 180
- Act4A is unsubbable and untechable and does 10 more damage; recovers 5 frames faster
- 2A(A) added as 6A(A)
- JY added
- 5X activates if only hitting the second hit, damage reduced from 75 to 70; first hit turns back turned opponents around
- 2X starts 3 frames faster and ends 8 frames later; drains slightly more than 12.5% meter on a miss at the end of the move; activation gives opponent no chakra on hit (TODO 2X now loses meter when she can no longer counter instead of the end of the move?)
- GRKnJ appears slightly closer to the opponent

### Gaara

![Gaara](/assets/images/changelog/gaara.png)

- Guard: 1760 to 2000
- 5B elbow hitbox removed; hitbox made smaller; active frame 2 hitbox size increase
- 5B(B) hitbox disappears two frames earlier
- 5BB(B) turns back turned opponents around
- 5BBA(A) has three grabbable frames at the startup, doesn't teleport as high
- 5BBA(B) changed to be 8AB(B)
- 5BBBB(A) hitbox appears two frames earlier; teleports a frame later when coming from B moves (ex: 6BB(A) instead of 8AB(A))
- 6B turns back turned opponents around
- 6B(B) 
  - Taijutsu flip kick, made strong on block
  - Start up is 4 frames later
  - Toe hitboxes slightly bigger
  - "lands" 2 frames later
  - Recovers 10 frames faster on landing
  - Can be done on whiff
  - Does not lift on block
- 4B does not push on block
- 4BB(B) increased duration, lower angle, hand knockdown
- 2B lift increased
- 2BA(A) and 2BAA(A) adjusted hand to clasp on Gaara's arm properly
- 2BAA now has extensions into 2A and 6A (2BAA6A , 2BAA2A)
- 8A
  - Has sit on frames 9-20
  - Cannot be thrown 15-until the pillar appears, then can be grabbed after
  - Hands curl around the arm properly
  - Recovers 6 frames faster
- 8A(B) (sand flip kick) "lands" two frames later; recovers 8 frames faster
- 8B ends significantly sooner, cannot do follow ups after Gaara lands
- 8B(B) cannot be done upon landing on the ground
- 5A
  - Charge changed from 11f to 9f
  - Uncharged moves slower with both orbs
  - Single charge has only one move slower
- 6A
  - Appears 12 frames sooner
  - Can be grabbed for the whole duration
  - Recovers faster
- 6A(A) extension added as chargeable 5A
- 4A counter window improved
- Act4A is now a modified sand dive that appears lower and is unblockable, does less damage
- 2A comes out faster, can be grabbed
- JA projectile has more stun; air momentum only affects his upwards lift
- RB animation replaced with a flip kick; RB(B) added
- 5X hitbox appears 5 frames sooner
- 2X:
  - Comes out faster
  - Recovers quicker
  - Requires and costs 75% meter
  - Blocks everything while the orb is active
  - Safe(r) on hit
  - Grabbable until frame 29 on startup and as the sphere disappears
  - Does 40 damage
  - Properly turns off intangibility and leaves it off
  - 3 frames less intangibility
- GRKnJ
  - Is RA
  - Teleports 1 frame faster
  - Side switches two frames sooner (same total duration)
  - Gives him a KnJ you can turn around and block like all the others
- Sand dive hitbox appears sooner, "lands" sooner

#### Cosmetic

- 4A hand sign put away on ending
- 2A fingers close after release of sand

### Temari

![Temari](/assets/images/changelog/temari.png)

- Health: 190 > 200
- Grabbable Moves: 5A(A), 5AA(A), 2A, 8A, 8A(A), 8AA(A), JA
- 5B hitbox appears for 1 more frame; two frames more blockstun
- 5BB(A) removed stagger and add chip
- 5BBA(A) add stagger and chip
- 5BBAA(A) is 2B(A); can hold 6 at startup to do 6A
- 6B given stagger, made weak on block from strong; ends 5 frames sooner; more lift
- 6B(B) changes to 8B(B); 3 grabbable frames on the startup; made strong
- 4B guard frames extended from 1-18 to -22, ends earlier, more lift, grabbable; 7 frames less blockstun
- 2B(A) replaced with 2A; follow ups adjusted to be in line with raw 2A
- 2BB(A) increased in damage by 7
- 8B(B) replaced by Act4A; has three grabbable frames at the startup; made strong
- RB ends about 12 frames sooner
- JB does 10 damage (from 16) and 10 block damage (from 16) but has the same guard stun; hitbox removed from head and butt; less lift
- J2B added with as a glide that can be cancelled early with Y which has A and B follow ups and always faces the opponent
- 5A8 does 8A
- 5AAX is a new string
- 6A is an untechable bounce; does 7 more damage
- 4A window improved
- Act4A is unblockable, can't be subbed or teched; made strong
- 2A in combo ends sooner; transitions to A follow ups slower (same as raw 2A)
- 8AAX is a new string
- JAX is a new string
- RA hitbox duration increased by 1 frame, last three active frames are untechable, move is no longer immune to highs as she stands up
- 5X starts moving three frames sooner; drains all meter on miss or hit from Temari
- GRKnJ hitbox duration increased by one frame, travel time is one frame longer
- New glide animation

### Kankuro

![Kankuro](/assets/images/changelog/kankuro.png)

- Health: 180 > 190
- Guard: 1480 > 1520
- Karasu throw removed
- 3ME entrances are modified: airborne option is the same air sub as everyone else, grounded version is RB
- Grabbable moves: 6B(A), 8B, 5A, 6A, 6A(A), 4A, 2A, 2A(A), 2AA(A), 2AAA(A), 2AAAA(A), RA, RA(A), 8A, JA
- Health: 185 to 180
- 5B elbow hitbox appears on the second active frame; two less damage; more float
- 5B(B) hitbox appears and disappears one frame later
- 5BB6B does 6B with follow ups
- 4A
  - Hitbox on elbow removed
  - Hand hitbox higher
  - More lift
  - Recovers faster
  - Frame 14 becomes immune to highs and mids
- 6B(A) recovers 2 frames faster
- 6BA(B)
  - Can be done on whiff
  - Transitions faster
- 8B
  - Duration changed from 49 to 44 frames (land on 40)
  - Is "airborne" two frames earlier
- 8B(B) removed
- 8B(A) added as 5A
- 6A done in strings has more endlag
- 6A(B)
  - Can be done on whiff
  - String window adjusted to only go to animation end and not with the additional recovery that was added to 6A
- 5X starts moving two frames sooner in super freeze
- RZA added by changing the animation to Kabuto's RA animation with RZAZA/ZRAA follow up

There are also some Karasu specific changes:

- Sleep stuns longer
- Backdash ends 5 frames sooner
- Grabbable moves: 8B, 8A, JA
- 2A, 2A(A), 2AA(A), 2AAA(A) have 4 more damage each
- JY added
  - Removes the unsubbable state (this is applied for the first few release frames of all overhead throws)

### Haku

![Haku](/assets/images/changelog/haku.png)

- Health: 190 > 200
- 5B made high
- 2B hitbox appears one frame sooner; hit direction changed slightly to assist follow ups
- 2B(B) first hit launches and damaged increased from 8,10 > 12,14
- 2B(A) changed to be 6A(A)
- 6A hits twice; damage is distributed between the two hits; can hold 8 during startup to do flip
- 6B(B) damage: 12 > 15; recovery reduced by 9 frames; slightly more lift
- 6BB(B) damage: 12 > 20; hitbox appears one frame sooner
- 4A window improved
- 4B low crushes two frames earlier
- Act4A appears above 14 frames faster, activation is unblockable and unsubbable; hitboxes are bigger and better placed; moves quicker
- 8A needles have slightly more lift
- RA does not have to complete a run animation loop first; projectiles appear one frame later
- JA spawns 5 needles instead of 10, holding each needle drains 6 chakra per frame instead of 3 (was pairs before)
- 5X hitbox appears 4 frames earlier
- 2X stomp turns back turned around; needles lift; TOD no longer possible
- GRKnJ changed to be a mid from a high
- Flip has five additional frames of recovery

### Zabuza

![Zabuza](/assets/images/changelog/zabuza.png)

- All non sword attacks do -2 damage (except 5B and 5B(B))
- 5B elbow hitbox does not show up on the first frame
- 5B(B) appears and disappears one frame later
- 5B(A) as 2A with follow ups
- 5BB(A) lifts on hit
- 5B(6B) as boot
- 6B turns back turned opponents around on hit; hitbox improved; hitbox added to forward knee; stagger
- 6B(B)
  - Buffer can happen one frame sooner
  - (TODO: Faster recovery?)
- 4B does not stagger anymore (due to 6B change)
- 5BBB(B) can be delayed
- 2B added as a sweep (Mizuki 2B); has 2B(B) with B follow up
- 8B
  - Has less endlag
  - Transitions to A faster
  - More lift
  - Can transition on whiff
- JB ground hit stuns longer; grabbable
- 5A bounce hitbox made the first two frames, hilt appears on frame 3, bounce made untechable and a high
- 5AAA follow ups changed:
  - A does vanilla; is a hard knockdown
  - 2A does vanilla B follow up
  - B follow up changed to be a custom 8A teleport
- 6A charge is faster, 1C breaks guard easier and hitstun increased, other charges do less guard damage; 3C is a hard knockdown
- 4A window improved
- Act4A teleports and recovers quicker
- 2A can be Y cancelled
- 2AA(A/2A) added
- 8A can be canceled before the teleport
- JA phantom sword works with both players; has one more active frame
- J6A added
- 5Y made overhead throw
- 2Y
  - Is slam throw
  - Victim flags adjusted to better match the animation
- 8Y changed to 4Y; made blockable and unbreakable
- 2X
  - Is immune to highs and mids from frame 11 to 36
  - Requires 75% meter
  - Links better on air hits
  - Damage reduced
  - Hilt hitbox on first revolution is slightly bigger
- RB as Boot
- RA as teleport
- 4X
  - Added
  - Is a command grab
  - Requires and takes 75% meter
  - Immune to highs and mids frames 1-15 after super freeze
  - Does 5+25 damage
  - Hard knockdown
- 4Z disabled

#### Cosmetic

- 6A releases sword 3 frames later and opens hand

### Iruka

![Iruka](/assets/images/changelog/iruka.png)

- Scar added to model's face
- Grabbable moves: 6B(A), 6A, 8A, JA
- 5B
  - Hitbox appears one frame sooner
  - Slightly smaller hand hitbox
  - Elbow hitbox removed
  - Hand hitbox larger on frame 2
  - Damage increased by 1
- 5B(B) damage increased by 1
- 5BB(A) changed to be a modified RA with 6A(A) follow up
- 5BBA(A) transition made 7 frames later
- 6B has more stun, more lift, and turns back turned people around
- 6B(B) made a mid from a high, replaced with 2B(B)
- 6BB(B)
  - Replaced with 6B(B)
  - Transition on the follow up made until the move ends instead of only 10 frames
  - Dust cloud when foot is put down is slightly smaller
- 6BB(A)
  - Can be delayed to do 5A with follow ups instead of 6A(A)
  - Damage changed from 20 to 26
- 6BBB(A) with follow ups exists
- 6BB(A) replaced with 6A(A)
- 4B
  - Has more lift
  - +3 DEF frames
  - Ends three frames sooner
  - More lift
- 2B made strong from weak on hit and block
- 2B(B) had spinning knockback removed, and has less lift; replaced with 6B(B); comes out one frame slower
- 8B replaced with 2B(B); does 20 damage from 26; transition is faster; made a mid from a high
- 8B(B) ends sooner (14f)
- JB made to launch with spinning knockback instead of stagger
- J6A new move, slow moving air control projectile
- RB
  - Hitbox appears one frame later
  - Move recovers earlier
  - First frame of the hitbox is techable, the rest are untechable (TODO: Resolve with below comment?)
  - First frame changed to a high from a mid to match other untechable bounce moves
  - Faster recovery on hit only
- 5A
  - Charge time reduced from 13 frames to 10 frames
  - Done with 8 does 8A
  - Has slightly more lift on uncharged
  - Done raw does not have increased lift
  - Startup animation changed from 22 frames to 19 frames
  - Ending animation changed from 47 frames to 44 frames
- 4A has a better window
- Act4A
  - Unblockable
  - Comes out faster on hit
  - Grabbable on landing
- 6A teleports behind the opponent no matter the range, when done in a string it does vanilla teleport with quicker action
- 6A(A) hitbox disappears three frames sooner
- 2A
  - Has slightly more lift
  - Damage increased from 18 to 23
  - Turns around back turned
- 2A(A) "lands"
- RA lifts on block
- JY added
- 5X first hit turns around back turned people
- 2X
  - Does 2X activator that goes into 5X super
  - It starts two frames sooner the hitboxes are bigger
  - First hit turns around back turned people
  - Activated super does more damage
  - Activated hits four additional times when the shurikens hit the opponent
  - Three less super freeze frames
- 4X is a real time super with start immunity to highs and mids that does Kabuto's 5X animation; has a unique super freeze animation; cannot be Y cancelled
- GRKnJ hitbox appears one frame later; appears much further back
- 6A combos added to strings list
- RA/5BBA high crush: 9-17

#### Cosmetic

- Y Cancel does the correct hand sign
- 4A hand sign is put away on ending or on activation

### Mizuki

![Mizuki](/assets/images/changelog/mizuki.png)

- Grabbable Moves: 6B(A), 6BB(B), 6A, 8A, JA
- 5B: hitbox appears one frame sooner, slightly smaller hand hitbox; elbow hitbox removed; hand hitbox larger on frame 2
- 6B staggers
- 6B(B) has one more frame of hitbox
- 6BB(B) Y cancels properly
- 6BB(A) does 8A; transition is later
- 2B
  - Made strong
  - Change to hit direction
  - Turns around the opponent on backturned
- 2B(B) made a mid (TODO: Was this reverted to high?)
- 2BBA(B) hitbox disappears three frames sooner
- 2A(A) "Lands" to fix rare issue where late in the 2A move Mizuki becomes "airborne" and cannot cancel his follow ups after teleport
- 8B pushes on block
- RB starts a frame later; move ends sooner
- 5A charge time decreased from 13f to 8f
- 6A when used in combo teleport backwards; faster action after; unique follow ups for combo or raw (A and B)
- 6A(B) changed to be 2BA(B)
- 6AB(B) removed
- 4A window improved; can activate on projectiles
- Act4A teleports up and behind the opponent
- 8A projectiles have an additional frame gap between their spawn
- JA throws two shurikens
- 2Y added as a knockdown throw for 40 damage
- 5X is vanilla into 2X animation with less damage; first hitbox turns backturned opponents around; does less hits on the dance
- 2X is vanilla 2X activator with large size and better duration on hitboxes; first hitbox turns backturned opponents around; activation does more damage than 5X
- 4X is a super projectile that begins with a jump backward; unblockable; requires and uses 75% meter; can be charged with X for more damage
- GRKnJ made into 4B; hand closed; travel time

#### Cosmetic

- Y Cancel makes appropriate hand sign
- 5X and 2X hands are fixed on the activator
- 4B GFX adjusted

### Anko

![Anko](/assets/images/changelog/anko.png)

- New walk animation
- 8BA combo removed
- Health: 200 to 215
- Guard: 1600 to 1680
- Grabbable moves: 2A, JA, 2BBB(A), 8B landing
- 5B: Hitbox lasts one frame longer, elbow hitbox does not appear on the first frame
- 5B(B) changed to be old 6B animation with old 5B(B) damage, ends sooner
- 6B uses an animation similar to Orochimaru; turns around back turned people, more stun, slightly later on transition to follow ups, slightly more lift
- 6AA(A) changed to be an empty teleport and has A and B follow ups; faces the opponent on reappearance; has three grabbable frames before the teleport
- 4B Hitbox appears one frame sooner
- 4B and 4BA(Y) have improved windows on states as well as ending sooner and can be grabbed during their "sit" frames
- 4B(B) OTGs; no longer catches late on OTGs, hitbox appears one frame sooner; activates if blocked (Ukon)
- 4B(A) transitions 8 frames faster
- 4BA(Y) can be subbed in the first few frames
- 2B(B) has more lift, can be done on whiff, "landing" is one frame sooner
- 2B(A) can be done on whiff
- JB does chip damage and does 4 more damage
- RB replaced with RA, lift increased
- 2BBB(B) hitbox appears one frame later
- 2BBB(A) snakes lift and do chip; does 2A in combo; ends 10 frames sooner
- 8B is a blockable hitgrab that is untechable, adjusted to stop the "reverse bounce" from happening
- 5A charge time changed from 10f to 8f
- 6A lifts higher and lifts on block
- 2A snakes:
  - Do chip damage
  - Animation changed to be the finisher of 5X
  - If pressing 2 at startup in a combo, does 2BBB(A)
  - Recover 5 frames faster
  - Damage per hit increased: 3 > 4
- 4A changed to be a teleport that can teleport to either side
- JA momentum applies sooner
- JA snakes adjusted to do chip damage and lift
- JB has a more steep angle
- JY victim subbable timing made to match Tsunade, is no longer sub unsafe on hit
- RA, 4BA(A) changed to be a teleport into the air RKnJ position into normal fall; A and B strings added
- RA has three grabbable frames before the teleport
- RB(B) and RB(A) both face the opponent on the follow up
- 5Y is a side switch throw
- 2Y is a new throw that bounces the opponent
- JY added
- 5X has:
  - An improved launch angle to stop resetting the combo against high up opponents
  - Requires 75% meter, but costs 100%
  - One less super freeze frame
  - Hitbox starts and ends one frame later
  - Elbow hitbox smaller
- 2X starts moving five frames sooner in super freeze and has an extended activator hitbox
- 4X is a command grab that puts down into an untechable, unsubbable state
  - Immune to highs and mids frames 1-9 after super freeze then immune to highs until after the hitbox disappears
  - Requires and costs 75%
  - 10+30 damage
  - Blockable
- GRKnJ appears slightly further behind the opponent
- 2BB~A transition slowed down by 6 frames

#### Cosmetic

- Second to last hit of 5X has kunai in her hand with the proper GFX

### Sarutobi

![Sarutobi](/assets/images/changelog/sarutobi.png)

- Health: 200 to 220
- Guard: 1600 to 1760
- Grabbable Moves: 6A(A), 8A, 2A, JA
- 5B(B) hitbox appears and disappears one frame later; better advantage on block; move ends sooner
- 6B can follow up on whiff
- 6B(B)
  - Has less endlag
  - Can follow up into A on whiff
  - Recovery animation adjusted
- 2B can continue to 2B(A) on whiff; does one more damage; last active frame has less lift
- 2B(B) is spinning knockback, less lift; A transition made later
- 2BB(B) ends sooner
- 2BB(A) comes out later; does ring combo
- 2BB(B) to 2BBB(B) transitions two frames faster; first hit has slightly more lift
- 2BBB(B) links into the second hit better
- 2B(A) damage increased by 2
- 2BA(B) has more lift, hitbox duration adjusted to juggle better, ends much sooner
- 2BAB(B) damage increased from 23 to 25
- 8B strong on block; hitbox stays out one more frame
- 8B(A) transition made 8 frames slower
- RB made untechable frame 22 to the end
- 5A charged time reduced from 10f to 8f
- 6A damage decreased by one damage
- 6A(A) goes to ring combo
- 4A acts like a normal counter, still works against projectiles
- Act4A is unblockable; cannot be grabbed; high crushes frame 14 instead of frame 1; hitbox comes out one frame later
- 2A 2A does not lift on block; changed from 3 hits at 8 damage each to 8 hits at 3 damage each
- 8A does chip damage, made strong, lifts on block; when done in a string goes to ring combo
- RA(A) is ring combo
- JA staggers on hit and damage adjusted, appears one frame sooner; lift slightly increased
- JY added
- 5X
  - Starts up one frame slower
  - Ends 3 frames later
  - 7 frames less super freeze
  - Hitboxes adjusted to be on front elbow and front knee
- GRKnJ travels one frame slower; appears further back
- Ring Combo: 5A = 5BB(A); 8A = 8A; 6A = Flames; 2A = 2A; 4A = 4A
- Flip kick faster recovery on hit or block only

### Jiraiya

![Jiraiya](/assets/images/changelog/jiraiya.png)

- Grabbable Moves: 2A, 6A, 8A
- 5B(B) stun on block and hit improved; move recovers earlier
- 5BB(A) made strong on block from weak; hitbox disappears one frame sooner
- 5BBA(A)
  - Is unblockable
  - Cannot be cancelled
  - OTG follow ups removed
  - Activates if blocked (Ukon)
- 5BBAB(A) replaced with 2A
- 6B has slightly less lift; stun in strings reduced by 9 frames
- 2B
  - First frame is an untechable bounce, then stagger
  - Elbow hitbox appears on frame 2
  - Hand hitbox smaller
  - Bounces further from Jiraiya
  - If holding B on frame 13 the move will bounce (first frame a techable high, second to end an untechable mid) if you don't hold B it staggers
- 2B(B)
  - First frame is a bounce, then normal hit
  - If holding B on frame 13 the move will bounce (first frame a techable high, second to end an untechable mid)
  - If you don't it will hit with normal stun; ends slightly earlier
- 2BB(B) bounces closer to Jiraiya, recovers sooner; done with 6 will do RAB(B)
- JB hitbox appears and disappears one frame sooner
- RB pushes on block and ends sooner; has slightly more lift
- 5A charge changed from 11 frames to 9; when done in a combo it does 5BBA(A)
- RA has more lift
- RA(B) replaced with 2B(B) with follow ups intact
- RAB(B) replaced with 2BB(B); done with 6 does vanilla. Foot "lands" two frames earlier, hard knockdown, cannot Y cancel, hitboxes slightly bigger
RAB(2B) longer duration, lower angles, hard knockdown
- RAB(A) added as 2A
- 4A has more stun and the looping of the animation is adjusted to 14 frames from 20
- 2A (not in a combo) has less recovery for Jiraiya; opponent can sub if hit out of puddle
- 2Y added as a sideswitch throw
- 2X is immune to highs and mids until Jiraiya begins to lower his hands, immune to highs only when his hands touch the ground; frog hitbox duration reduced from 60 frames to 38
- GRKnJ has the reduced endlag of RB; changed from to a mid from a high

### Tsunade

![Tsunade](/assets/images/changelog/tsunade.png)

- New walking animation
- Health: 210 to 220
- Guard: 1680 to 1760
- Grabbable moves: 2A
- 5AB(A) Stun increased slightly
- 5B hitbox appears one frame sooner, elbow hitbox removed; hand hitbox larger on frame 2
- 5B(B) can be hyuuga cancelled; stun increased by 1 frames
- 5BB(A) charge time reduced by 2; recovers two frames faster (when the animation ends)
- 5BBA(A) changed to be BBA(B) (the shoulder check)
- 5BBA(B) changed to be 6BA(B) (the double arm launcher)
- 6A replaced with RB(A) with follow ups and charges; "sit" 5-8 and 1-6: if charge, loses high crush
- 6B stuns longer; hitboxes slightly larger
- 6B(A) Hand hitbox slightly bigger
- 6BA(A) added as old 6A
- 8A given slightly more lift
- 8B first frame is a capture state into ActJA
- 2B(B) pushes on block
- 2BA(A) charge time reduced by 1
- 2BAA(B) transitions one frame slower
- RB first hitbox frame is a high and techable bounce and second frame is a mid and untechable bounce; hitbox disappears one frame earlier
- RB(A) has more lift
- JB landing hit has one more frame duration; grabbable; more stun
- J6B added with slight forward drift at startup
- JA is unblockable; has 10 frames super armor on startup, has forward or backwards momentum with 6 or 4; three frames less landing lag (TODO: -2 frames now?)
- 5A hand hitbox does not appear on the first frame; slightly more lift
- 5A(B) stuns longer; knee hitbox does not appear on the first frame; slightly more lift
- 4A window improved; works against projectiles
- Act4A comes out faster, unblockable, untechable, and unsubbable, teleports closer to opponent
- 2A cannot be teched; close and far hitboxes size increases so the attack has no gaps where the GFX are; traps feet of the opponent on hit
- RA made a hard knockdown; hitbox appears one frame later; elbow hitbox moved to waist; done in a combo is not a hard knockdown and is an instant guard break
- ActJA can be subbed later
- 2Y is a bounce throw
- JY subbable window adjusted to match JA (No longer unsafe to sub on hit)
- JY added and does modified ActJA
- 2X activates without hitting someone
- GRKnJ replaced with 8A animation
- "Elbows" window changes due to these adjustments:
  - BB(A) 11-12 (13)
  - 2BA(A) 11 (12)
  - 5ABB(A) 11-12 (13)
  - AB(A) 11-13 (16)
  - RB(A) 11-12 (13)
- Finger Flick activates if blocked (Ukon)

### Orochimaru

![Orochimaru](/assets/images/changelog/orochimaru.png)

- Grabbable Moves: JA, 8A, 2A(A), 2AA(A), 6A, 2B(A)
- 5B has slightly more stun on block and more lift
- 5B(B) improved advantage on hit and block; move ends four frames sooner; can follow up on whiff
- 6B can do A follow up on whiff
- 6B(B) added as 2BBB(B) with follow ups
- 2B can follow up on whiff
- 2BBB(B) has more lift
- 2BBB(A) changed from RA to 4A
- 2BBBB(B) bounces closer
- 8B has guard frames until Oro jumps; done in combo replaced with 2BBB(B) with follow ups
- RB lifts on block
- RB(B) added as 2BBBB(B)
- JB can be DIed in the air with 6 or 4
- 5A charge time changed from 11 frames to 8
- 5A(A) added as 2AA(A)
- 4A "attachment" window changed from 10 frames to 14
- 2A has more stun on the second hit, less hitbox duration
- 2AB(B) added as 2BBBB(B)
- 2A(A) has slightly more stun
- RA is an untechable sweep; pursuit removed
- 2BBBB(A) and 2AA(A) snakes do chip
- 2Y added, cannot be shaken, opponent cannot be grabbed, Oro can move a few frames later (TODO: This is faster now?); opponent can sub
- 5X damage reduced 65 to 50
- 2X hits better on both hits; damage on the activated portion, first hit lifts on block and is blockable; ends sooner; knee hitboxes made slightly smaller
- GRKnJ changed to be RB

#### Cosmetic

- 2X ends properly at the end of the animation with the correct graphics

### Kabuto

![Kabuto](/assets/images/changelog/kabuto.png)

- Health: 180 to 190
- Grabbable moves: RA, JA, 8A, 2A landing
- 5B hitbox appears two frames later, slightly smaller hand hitbox; elbow hitbox removed; hand hitbox larger on frame 2; one more frame blockstun
- 5B(B) has slightly more stun; hitbox appears and disappears a frame later; slightly more lift
- 5BBAB(B) transition time adjusted to match 6B(B); slightly more lift (not on 6B(B))
- 5BBAA(A) guard frames changed to be start to 22 instead of the entire move; pushes on block
- 6B(B) has four frames less endlag
- 6BA(B) high crush added; recovery sped up
- 2B high crush from 11-31; transition to 2B(B) window increased by 10 frames
- 2BB(B) replaced with a custom 6BA(B) that knocks away on hit and block; hitbox appears one frame later
- 2BB(A) has guard from 1-22; has one hitbox active frame removed from the end
- 8B high crushes on landing; 4 less recovery frames
- RA first projectile appears one frame sooner, gap between the two changed to be 1 frame (from 2)
- RB changed to strong and pushes on block, bigger hitbox
- JB launches instead of staggers; hitboxes slightly bigger
- 6A has high crush on 9-21
- 6A(A) has more stun
- 6A(B) added as 2B with follow ups
- 6AA(A) launches on hit and block
- 4A window improved
- Act4A comes out quicker and ends quicker
- 2A flags adjusted to match the animation better, cannot sub during the animation, unscaled damage applies to both players; cannot be cancelled
- A2A can be hit at the peak of his jump
- 5X
  - Activator has the hitbox appear 4 frames sooner
  - Begins moving 3 frames sooner
  - Hitbox changed from chest to shoulder to avoid some reverse hitboxes
- 2X does slightly more damage, drains chakra, second frame to end is unblockable; hit airborne launches higher; stuns much longer when not putting into sleep
- GRKnJ replaced with 5BBBB(A); adjusted to hit quicker without reducing travel time
- Sleep is +1 against Karasu and does not mess up his commands

#### Cosmetic

- 4A hand sign is put away on ending

### Jirobo

![Jirobo](/assets/images/changelog/jirobo.png)

- Health: 230 to 240
- Guard: 1840 to 1920
- Grabbable moves: JA, 6A, 5BBBA(A)
- 5B(B) has better advantage on hit and block, ends sooner
- 5BB(B) does 10 less block damage
- 5BBB(B) has 9 less endlag frames
- 5BBBA(B) does 1 more damage; pushes on block; does not high crush
- 5BBBA(A) does 1 less damage, grab follow ups removed, but makes an unsubbable knockdown; knockdown starts getting up faster
- 5BBBAA(A) added as a blockable command grab; does 5+40 damage and is breakable. Also on: 2BAA(A), 8BBA(A), 2BBA(A), 2BBBBA(A), 6BBAA(A); can press/hold 4 at the start to turn around and do the throw
- 6B shoulder hitbox does not appear on the first active frame, becomes an untechable bounce on the second active frame; delay to 5B(B) changed to be an 8 frame wait instead of 10; high instead of mid
- 2B has more stun
- 2B(A) changed to be 6A
- 2BA(A) added with stone clap
- 8B has more lift
- 8B(B) starts up one frame later; transitions 3 frames later; ends two frames sooner
- RB ends 12 frames earlier
- 5A charge changed from 9 frames to 6 frames; done with 6 does 6A
- 5A1C is a hard knockdown; less lift
- 6A has slightly more lift; comes out one frame earlier when done in a string
- 6A(A) added as stone clap
- 6A(B) added
- 4A window improved, when done in a combo it does 6A
- Act4A: hit into a spinning knockdown that is unblockable; has A and B follow ups
- 2A has endlag on both sides, reduced from 25 to 10 on behind (same for front)
- 8A super armor ends when Jirobo leaves the ground
- A8A ends three frames sooner when the animation ends and is hittable after he gets off the opponent
- RA has guard frames when Jirobo is in the air and can be thrown, hits twice; high crush on landing
- Throw damage reduced from 22 to 20
- 2Y added
- JY added
- 5X has two less frames super freeze
- 2X made immune to highs and mids from frames 0-14 after super freeze instead of intangible 0-1, 42-end
- ARKnJ intangibility removed
- GRKnJ has faster englag to match RB, flags fixed from vanilla
- BB~A one frame faster

#### Cosmetic

- 8A ends properly at the end of the animation

### Kidomaru

![Kidomaru](/assets/images/changelog/kidomaru.png)

- Health: 230 to 215
- WUK animation is 2B(B); has one additional frame of intangibility before fuse and the hitbox starts and ends one frame later
- 6A and 8A killing in 3MC no longer locks out the use of the same moves
- Grabbable Moves: 6A, 2A, JA, 8A, 5BBBB(A), 2BBB(A), 5BBAB(A), 2BBAB(A)
- 5B has more lift
- 5B(B) stuns longer by 2 frames on hit and 3 frames on block
- 5BB(B) hitbox adjusted slightly, hitbox active one more frame, animation ends 5 frames earlier; can delay into A follow up longer
- 5BBA(R) transition made one frame later
- 5BBB(B) flags cleaned up; recovers faster
- 5BBB(A) is ring combo
- 5BBBB(B) does more damage
- 5BBAB(B) has no knockback on the first two hits and none of the hits pushes block
- 5BBAB(A), 5BBBB(A) does flying screen instead of bounce
- 5BBAB(A) follow up does not last as long; changed to match others
- 6A
  - Does 1+10 damage instead of 5 damage
  - Is now unblockable by Ukon and bypasses reversals
- 6B(B) has one more frame duration and slightly more lift
- 6B(A) added as ring
- 6BB(B) does more damage; 3 frames before the teleport that are grabbable added; transition able to be delayed an extra 14 frames
- 6BB(A) is ring
- 4B first two hits link into the third better
- 2B has sweep added with less lift
- 2BB(B) has more lift; flags adjusted; ends earlier
- 2BBB(B) flags adjusted
- 2BBAB(B) does more damage
- 8B(R) added
- JB hitbox appears a frame earlier
- RB flags adjusted to better fit the move; ends 9 frames earlier
- 5A has no charges but releases the charged projectile
- 4A def starts frame 12, loop that drains chakra starts at frame 2 (from 20), drains 190 units per frame (from 180)
- Act4A activates into a single frame of blocking if needed
- RAA(B) transition much faster with an end window
- RAA(A) is ring combo
- JA staggers
- JY added
- 5X transfers into the activated animation quicker; hitboxes appear one frame sooner, all hitboxes made slightly bigger; middle arm hitbox moved to waist
- 2X is immune to mids and highs until he begins to lower his hands; spider hitbox is bigger
- GRKnJ changed to a custom animation using the 5X activator; moved back a bit
- Ring Combo: 8A is 8A; 6A is 6A; 2A is 2A; 4A is 4A; 5A is 5BBB(A)

### Sakon

![Sakon](/assets/images/changelog/sakon.png)

- Sakon (but not Ukon) has a new idle
- Pressing (or holding) Z on the first frame of back dash switches the brothers; can be done on match startup
- 5B more stun on hit and block; elbow hitbox doesn't appear until the third active frame
- 5B(B) hitbox appears and disappears one frame sooner; better stun on hit and block; move ends sooner
- 5BBA(A) transition adjusted to be quicker
- 6B(B) replaced with 8B with follow ups
- 4B doesn't push on block
- 8B has slightly more lift
- 8B(B) has slightly more lift
- 8BB(B) hitbox appears one frame sooner
- 8BB(A)
  - Has slightly more lift
  - String added for Ukon
  - Hits 3 times instead of 4
  - More damage, stun, and guard damage
- 5A charge changed from 11f to 8f
- 6A if hold A it does the launching hit and more damage; if not it does a normal hit with super cancel
- 4A window for counter improved; swaps the brothers when the activation window starts
- Sakon Act4A is unblockable and unsubbable
- Ukon Act4A does 2A(B)
- 2A stagger removed
- 2A(B) has more lift and ends earlier; transition slowed down
- 2AB(A) does 8BB(A)
- 2A(A) staggers and has increased lift
- 8A
  - Hitbox appears one frame sooner
  - First and middle hits hit higher
  - "lands" two frames sooner
  - Damages adjusted:
    - Sak: 14,10,10,10 > 7,10,10,19
    - Uko: 20,10,10,10 > 9,10,10,23
- RA has less lift, 3 more frames duration, lifts on block
- RA(A) does spinning knockdown, less lift, ends sooner; transitions later
- JA
  - Landing hitbox added that will only hit if the aerial final hit does not
  - If blocking the landing hitbox it does not lift on block
  - If blocking the aering hitbox it does lift on block
  - Hits 3 times instead of 4
  - More damage, stun, and guard damage
- 5X starts moving 4 frames sooner
- 4X swaps Sakon to Ukon the first active frame of the hitbox and swaps Ukon to Sakon on frame 2 of the activator. Goes into 5X on activation
- 2X now a mid instead of a high
- GRKnJ hitboxes changed to properly match RB

And for Sakon only:

- JY added
- 8A ends 6 frames earlier
- New strings:
  - 5BBA(hold)A
  - 6BA(hold)A
  - 2BBA
  - 2BB(delay)A
  - 2B(hold)A
  - 2AB(delay)A

### Tayuya

![Tayuya](/assets/images/changelog/tayuya.png)

- Health: 180 to 215
- Guard: 1440 to 1680
- All Doki Demon summons in combo are 6A; if holding 8 when it starts it will do 8A; holding 2 will do 2A; More ring combos are notated in strings
- 3ME entry option replaced with vanilla GRKnJ
- 5A, Act4A, JA, and 2X all stop projectiles while the hitboxes are active
- Grabbable Moves: 5A, JA
- 5B given more stun on hit and block; elbow hitbox appears on the second active frame; damage increase: 8 > 11
- 5B(B)
  - Less disadvantage on block
  - Move ends sooner
  - 5 frames less recovery
- 5BBB(B) made into 6BB(B)
- 5BBBB(B); sit on frame 7 and stand on 14 instead of sit 14 to the end; foot down GFX 14 frames later and the other foot down 4 frames after that; +2 damage
- 5BBA(B) does 3 more damage, ends sooner, hard knockdown
- 6A has 10 less recovery frames; Doki hitbox slightly bigger; raw version has more stun, combo version has less stun
- 6A(A) has 10 less recovery frames
- 6AA(A) has 10 less recovery frames
- 6B
  - Turns backturned opponents around
  - High crushes
- 6BB(B) has 2 more frames of hitstun; +1 damage; hitbox comes out and disappears one frame sooner
- 4B
  - Stagger removed
  - Does small bounce
  - Hits closer to Tayuya
  - +2 guard frames
  - State flags better match the animation
  - Ends earlier
  - Can be grabbed
  - Damage increase: 14 > 16
  - Faster recovery on hit or block only
- 2B has more lift with adjusted hitbox times to better match the animation; damage increased: 9 > 12
- 2B(B) lifts on block, ends sooner, adjusted frames and knockbacks
- 8A has 10 less recovery frames
- 8A(A) has 10 less recovery frames
- 8A(B) works again and is a back handspring if not done in a combo (TODO: Is this just vanilla now?)
- 8B
  - Has the 2B(B) changes
  - Ends one frame sooner
  - Damage adjustment: 9,15 > 12,13 (TODO: Also 2B(B)?)
  - Faster recovery on hit or block only
  - Second hit does not lift on block
  - "lands" three frames sooner
  - Low crushes
- 8B(B) transition window ends two frames sooner
- 5A charge changed from 19 to 9 frames, more lift, last hit staggers, better on block, doesn't hit as far away (uncharged too); increased duration by one frame
- 5A1C
  - Does more damage
  - Has slightly more endlag
  - Extra recovery on hit only
- 4A counter window improved, doesn't slide backwards when guarding
- Act4A is unblockable
- 2A ends sooner; has 10 less recovery frames
- 2AX is a string into 2X
- RA has defense frames and can be grabbed during airborne frames
- JA staggers on the last hit, slightly more gravity for Tayuya; first four hits don't move the opponent
- JB travels at a more horizontal angle; shin hitbox removed and put on waist, slightly bigger; damage increase 8 > 18
- 5X requires 75% meter and has one more frame duration; damage increased to 50 from 40
- 2X
  - Doesn't push on hit
  - Duration increased to 17 frames
  - Starts up three frames later (ends same time) with three frames less super freeze (TODO: 3 or 5?)
  - Small subbable window now exists as a result
- GRKnJ summons a 6A monster that hits for a small bounce; Tayuya teleports a bit further back, monster has intangibility up until around the hitbox appears

And for Tayuya's doki demons:

- 6AA(A) floats higher
- 2A made strong
- 8A made strong; hitbox appears one frame later and disappears one frame sooner
- 8A(A) made strong

### Kimimaro

![Kimimaro](/assets/images/changelog/kimimaro.png)

- Grabbable Moves: JA
- 5B elbow hitbox removed; hand hitbox made smaller for first frame only
- 5B(B) improved by 6 frames on hit and block
- 5BBB(B) has more lift on the second hit; does not lift on block
- 6B turns back turned people around on hit, more lift
- 6B(B) more stun
- 6BB(B) replaced with 4B
- 6BAA(A) added as 6AAA(A)
- 2B(B) launches
- 8B has spinning knockback and ends sooner, more lift
- 6A made a strong hit, more lift, swapped with 6A(A); hitbox appears one frame sooner
- 6A(B) made a strong hit
- 6A(A) made a strong hit, swapped with 6A
- 6AA(A) made a strong hit, launches
- 6AAA(A) does one more damage on each hit with less lift and better connection in the air
- 8A "lands" three frames sooner
- 8A(B) less lift
- 8A(A) less lift
- 4A window improved
- Act4A all hits are unblockable except the last, links better on airborne
- 2A(A) has more lift
- 2AA(A) added as 6AAA(A)
- 5X
  - Comes out one frame later
  - Hand hitbox removed
  - 6 frames less super freeze
- 2X bones that did 6 damage now do 5 damage
- WUK uses the 2A(A) animation
- ARKnJ intangibility removed
- GRKnJ intangibility removed
- GRKnJ made a mid from a high

### Itachi

![Itachi](/assets/images/changelog/itachi.png)

- Health: 230 to 205
- Guard: 1840 to 1680
- 3 grabbable frames added before teleporting on: RA, 6A(B), 8A(B), 6AA(A), 5BBBBA(A), 6BBA(A)
- 2BBB(B) "lands" three frames later
- 5B elbow hitbox doesn't appear on the first active frame; given slightly more blockstun
- 5B(B)
  - Animation moves forward slightly more
  - TODO: This still true? elbow hitbox is slightly bigger, hand hitbox is slightly smaller, hitbox disappears one frame sooner
- 5BB(B) ends four frames earlier
- 5BBBBB(A) cannot be OTG'd
- 6B
  - Ends 3 frames earlier
  - Shoulder hitbox slightly bigger
  - Turns around back turned
- 6BB(A) launches
- 4B
  - Animation replaced with 5BBBBB(B)
  - Made strong on block
  - +2 frames duration on hitbox
- JB hitbox improved
- RB First hit has slightly more lift; if holding B for the second hit, it bounces like before; if not, it staggers
- 6A(B) has more lift; hitbox improved
- 8A hitbox disappears one frame sooner
- JA
  - Has changed momentum
  - Clone appears higher and more forward
  - More lift on hit
  - Less blockstun
- 5X
  - Damage reduced from 85 to 70
  - Starts moving 2 frames sooner in super freeze
  - Damage is applied on the stab
  - Drains 50% meter on the damage frame
- 2X defends back; missed 2X drains just over 12.5% meter at the end of the move; requires 75%; can be grabbed (TODO 2X now loses meter when he can no longer counter instead of the end of the move; lifts slightly lower on hit?)
- GRKnJ
  - Appears further back
  - First hit has slightly more lift
  - Damages changed from 5+5 to 3+3
- ARKnJ has 12 frames less endlag to match the others; lift reduced

### Kisame

![Kisame](/assets/images/changelog/kisame.png)

- Health: 240 to 230
- Guard: 1920 to 1840
- Grabbable Move: JB Ground Hit
- All non sword moves do -2 damage (except 5B and 5B(B))
- 5B: elbow hitbox appears on active frame 2
- 5BBB(B) can be delayed
- 6B turns back turned opponents around; more lift
- 2B Faster recovery on hit
- 2B(A) changed to be 6A
- 8B high crushes on frame 6
- 8B(B) added as 6B with follow ups
- JB shockwave hitbox is now -1 on hit (was -8)
- 5A +5 damage and block damage, more lift
- 5A(A) has more lift
- 6A
  - Hitbox appears one frame sooner
  - Hilt hitbox is larger
  - Uncharged juggles better and ends with a low sweep
  - 1C is a mid sweep
  - 2C is an untechable sweep
- 6A2C is unblockable; sweep ender is untechable
- 4A: Window improved
- Act4A is unblockable and drains chakra
- 8A high crush changed from 1-end to 11-32 to match the animation better
- JA phantom sword glitch applies to both players; hitbox is active for one more frame
- 5Y does normal overhead throw
- 2Y is slam throw
- 5X hitbox appears one frame sooner; drains 50% meter (vanilla is 47.8%)
- 2X
  - Requires and costs 75%
  - Shark juggles better
  - Shark is a single hit projectile that does 50 damage
  - Can be grabbed the entire duration
- 1X does turn around 2X
- GRKnJ changed to a custom 6B

#### Cosmetic

- 4A releases the sword two frames earlier
