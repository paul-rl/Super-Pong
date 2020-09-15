var p5Inst = new p5(null, 'sketch');

// Majority of the code in this function was created by me, and it is the main function of the
// program.
window.preload = function ()
{
  // CODE.ORG'S CODE STARTS
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;

  var animationListJSON = {"orderedKeys":["696e9755-a265-4971-af82-1b9ffdc991b2","23871a55-227b-4722-97fa-6ed4377e65f8","55049cf1-cb7a-4e2f-af75-c6d440f9e765","d48b4ce2-1e5f-4c93-b3b3-ff7920b75af1","f3372d3e-9af5-44c9-a39e-75ac86368a1c","5d3cb053-ae9e-405e-88df-f1863155113e","baaf3401-92ad-4ffb-b138-051a071d4b6d","ba643929-2d7c-402e-a01a-fb815ece338d","20356e26-2169-4637-934e-165e438f22f2","170c26ba-1ef1-4d1a-8954-12a5cf67cadb","2cdd98a5-9601-4afc-abb3-71c9bf8ff344","d3cddf1a-26a0-4264-afed-c0a857be7e66","d1bde9a8-3755-4356-b82e-51217779f953"],"propsByKey":{"696e9755-a265-4971-af82-1b9ffdc991b2":{"name":"tScreen","sourceUrl":null,"frameSize":{"x":87,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"L7anHbABmj1MwYBBkpT7wVgDctn4eb0X","loadedFromSource":true,"saved":true,"sourceSize":{"x":87,"y":74},"rootRelativePath":"assets/696e9755-a265-4971-af82-1b9ffdc991b2.png"},"23871a55-227b-4722-97fa-6ed4377e65f8":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/FFMQ_58I8xzOk6wyz55AgS_FfjGWeI2h/category_characters/sun.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":2,"version":"FFMQ_58I8xzOk6wyz55AgS_FfjGWeI2h","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/FFMQ_58I8xzOk6wyz55AgS_FfjGWeI2h/category_characters/sun.png"},"55049cf1-cb7a-4e2f-af75-c6d440f9e765":{"name":"letterE1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"o_jaYpAeIjBdKLtZhVAOEba8XbEQuMd7","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/55049cf1-cb7a-4e2f-af75-c6d440f9e765.png"},"d48b4ce2-1e5f-4c93-b3b3-ff7920b75af1":{"name":"letterE2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"vYZEo0Y7YeRjX4tUvHAnTxSgHISRIkNG","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/d48b4ce2-1e5f-4c93-b3b3-ff7920b75af1.png"},"f3372d3e-9af5-44c9-a39e-75ac86368a1c":{"name":"letterG","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"vDhMJwYpNl4WHJ9tX.xgGZQ2RFaagRKD","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/f3372d3e-9af5-44c9-a39e-75ac86368a1c.png"},"5d3cb053-ae9e-405e-88df-f1863155113e":{"name":"letterA","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"MbqhGKZrOy4ZGbuQ3jeJopr5mbaL.v8W","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/5d3cb053-ae9e-405e-88df-f1863155113e.png"},"baaf3401-92ad-4ffb-b138-051a071d4b6d":{"name":"letterM","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"aw1P5oGhBJFoogaVv3X8HvYfjmDS4RKi","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/baaf3401-92ad-4ffb-b138-051a071d4b6d.png"},"ba643929-2d7c-402e-a01a-fb815ece338d":{"name":"letterO","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"6piGjUpFkDKABdli7l_yLGU9D6al1Ibb","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/ba643929-2d7c-402e-a01a-fb815ece338d.png"},"20356e26-2169-4637-934e-165e438f22f2":{"name":"letterV","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"gEVx_BiL8m54ZZE.mszKcE2W_upZqZ6G","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/20356e26-2169-4637-934e-165e438f22f2.png"},"170c26ba-1ef1-4d1a-8954-12a5cf67cadb":{"name":"letterR","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"pD9g6V65LSk3Aq8j9.F8_MAQuSH.0fXO","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/170c26ba-1ef1-4d1a-8954-12a5cf67cadb.png"},"2cdd98a5-9601-4afc-abb3-71c9bf8ff344":{"name":"letterP","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"XODRwqxAqfGOb4Zdha.9znM6TriebC.i","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/2cdd98a5-9601-4afc-abb3-71c9bf8ff344.png"},"d3cddf1a-26a0-4264-afed-c0a857be7e66":{"name":"number2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"pNFpuzII3lvVcr4eUkzD5QEXp3ocn2Zk","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/d3cddf1a-26a0-4264-afed-c0a857be7e66.png"},"d1bde9a8-3755-4356-b82e-51217779f953":{"name":"number1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"MAJ5Pfbzw.l1b2CxQ3Q9OMeowqQepTKX","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d1bde9a8-3755-4356-b82e-51217779f953.png"}}};

  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;

  orderedKeys.forEach(function(key)
  {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function ()
    {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );

      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage)
  {
    if (stage === 'preload')
    {
      if (setup !== window.setup)
        window.setup = setup;
      else
        return;
    }

// CODE.ORG'S CODE ENDS, MY CODE STARTS

    const BRICK_H = 50;
    const BRICK_W = 15;
    const FPS = 30;

    var topEdge = createSprite(200, 0, 400, 5);
    var botEdge = createSprite(200, 400, 400, 5);
    topEdge.setCollider("rectangle");
    botEdge.setCollider("rectangle");


    // Takes in two parameters, an integer, x, which represents the starting position of the
    // column of bricks and an array of sprites, bricks, in which we will store the individual
    // sprites. Has no return type.
    function makeBricks(x, bricks)
    {
      var c1 = 0;
      var c2 = 0;

      // There are 16 bricks total per side, so we must spawn each one
      for (var i = 0; i < 16; i++)
      {
        // Each multiplied by 256 to account for the 256 possible values for red, green, and blue.
        var red = Math.random() * 256;
        var green = Math.random() * 256;
        var blue = Math.random() * 256;
        // This spawns the first set of bricks in one column, and the second
        // set of bricks in a column before it.
        if (i < 8)
          bricks.push(createSprite(x, c1 + BRICK_W + 1); // +1 so the sprites don't overlap
        else
        {
          bricks.push(createSprite(x + 20, c2 + BRICK_W + 1)); // +1 so the sprites don't overlap
          c2 += BRICK_H + 1;
        }

        // Set the properties of the given brick
        bricks[i].height = BRICK_H;
        bricks[i].width = BRICK_W;
        bricks[i].shapeColor = rgb(red, blue, green);
        bricks[i].setCollider("rectangle");

        c1 += BRICK_H + 1;
      }
    }

    // Function that takes in two parameters, a sprite and an integer representing a direction.
    // 1 is the top direction, -1 is the bottom direction.
    // It then checks whether the sprite has not crossed into the unplayable area in the given
    // direction. Returns true if it is in bounds, false if it isn't.
    function inBounds(spr, dir)
    {
      // Check top bound
      if (dir == 1)
      {
        var yPosTop = spr.y - (spr.height - BRICK_H) / 2;
        if (yPosTop >= 5)
          return true;
        return false;
      }
      else // Check bot bound
      {
        var yPosBot = spr.y + (spr.height + BRICK_H) / 2;
        if(yPosBot <= 395)
          return true;
        return false;
      }
    }

    // Set the properties for the ball.
    var ball = createSprite(200, 200);
    ball.setAnimation("ball");
    ball.height = ball.width = 30;
    ball.setCollider("circle");

    // Set the properties for the players.
    var player1 = createSprite(60, 200);
    var player2 = createSprite(340, 200);

    // Player colliders slightly bigger than the sprite size to avoid janky collisions.
    player1.setCollider("rectangle", 0, 0, 11, 55);
    player2.setCollider("rectangle", 0, 0, 11, 55);

    // Create the bricks and store them.
    var bricksP1 = [];
    var bricksP2 = [];
    makeBricks(20, bricksP1);
    makeBricks(360, bricksP2);

    // Set up player paddles
    player1.height =  player2.height = 50;
    player1.width = player2.width = 10;
    player1.shapeColor = player2.shapeColor = "black";

    // Set ball properties and starting conditions
    var goesFirst = Math.random();
    var mult = Math.random();

    var xVel = 5;
    if (goesFirst >= 0.5) xVel = -5;

    var yVel = randomNumber(1, 2);
    if (mult < 0.5) yVel = yVel*-1;

    var coundown_timer = 3;
    var title = createSprite(200, 100);
    var destroyed = 0;
    var gameDone = 0;

    function draw()
    {
      var started = false;
      background("white");
      title.visible = false;

      if (!started)
      {
        // Create title screen and set its properties
        stroke("black");
        textSize(20);
        text("Press Spacebar to Start", 100, 200);
        title = createSprite(200, 100);
        title.setAnimation("tScreen");

        var s = createGroup();
        s.add(title);

        drawSprites(s);

        // Time to start the game!
        if(keyWentDown("space"))
          started = true;
      }
      else
      {
        // Before the game starts, start the countdown timer and display it
        // Then, move the ball, and then the main game loop begins
        if (coundown_timer > 1 / FPS)
        {
          countdown_timer -= 1/ FPS;
          stroke("black");
          textSize(30);
          text(coundown_timer.toFixed(1), 179, 170);
        }
        else if (ball.velocityX == 0)
        {
          ball.velocityX = xVel;
          ball.velocityY = yVel;
        }
        else
        {
          // Bounces section
          // Speed up the ball on each bounce if it hasn't reached the max speed
          // Bounces off top edge or bottom edge
          if (ball.bounceOff(topEdge) || ball.bounceOff(botEdge))
          {
            if (Math.abs(ball.velocityX) <= 7)
            {
              if(ball.velocityX>0)
                ball.velocityX += ball.velocityX/10;
              else
                ball.velocityX -= ball.velocityX/10;
            }
          }

          // Bounces off player 1
          if (ball.bounceOff(player1))
          {
            playSound("hit (online-audio-converter.com).mp3", false);
            if (Math.abs(ball.velocityX) <= 7)
            {
              ball.velocityX += 0.5;
              ball.velocityY += 0.5;
            }
          }

          // Bounces off player 2
          if (ball.bounceOff(player2))
          {
            playSound("hit (online-audio-converter.com).mp3", false);

            if(Math.abs(ball.velocityX)<=7)
            {
              ball.velocityX -= 0.5;
              ball.velocityY -= 0.5;
            }
          }

          // Check P2 bricks when the ball is on the right side of the court and P1 bricks when
          // ball is on left side, any bricks hit are destroyed
          if (ball.x > 200)
          {
            for (var i = 0; i < 16; i++)
            {
              if (ball.bounceOff(bricksP2[i]))
              {
                playSound("assets/Hit_Hurt36.mp3");
                bricksP2[i].destroy();
                if (destroyed == 1)
                {
                  ball.velocityX *= -1;
                  ball.velocityY *= -1;
                }
                destroyed++;
              }
            }
          }
          else
          {
            for (var j = 0; j < 16; j++)
            {
              if (ball.bounceOff(bricksP1[j]))
              {
                playSound("assets/Hit_Hurt36.mp3");
                bricksP1[j].destroy();
                if(destroyed == 1)
                {
                  ball.velocityX *= -1;
                  ball.velocityY *= -1;
                }
                destroyed++;
              }
            }
          }

          // Hard cap it so that multiple bounces don't affect velocity
          if (destroyed>=1) destroyed = 0;

          // Input section
          if (keyDown("w") && inBounds(player1, 1))     player1.y -= 5;
          if (keyDown("s") && inBounds(player1, -1))    player1.y += 5;
          if (keyDown("up") && inBounds(player2, 1))    player2.y -= 5;
          if (keyDown("down") && inBounds(player2, -1)) player2.y += 5;

          // This is the "speed up" cheat which allows to speed up in case the ball gets
          // in a stalling situation
          if (keyDown("1") && keyDown("z")) ball.velocityX += 2;

          // Win condition
          if (ball.x <= 0) // Ball scored on P1 goal
            gameDone = 2;
          else if (ball.x >= 400) // Ball scored on P2 goal
            gameDone = 1;

          // The game has finished, and now its time to clean up.
          if (gameDone > 0)
          {
            // Clean up time!
            var list = World.allSprites;
            var len = list.length;

            for (var ko = 0; ko < len; ko++)
              list[ko].visible = false;

            // Set up the ending screen
            var g = createSprite(80, 80, 100, 100);
            var a = createSprite(150, 80, 100, 100);
            var m = createSprite(220, 90, 100, 100);
            var e = createSprite(300, 80, 100, 100);
            var o = createSprite(130, 200, 100, 100);
            var v = createSprite(200, 200, 100, 100);
            var e2 = createSprite(270, 200, 100, 100);
            var r = createSprite(330, 200, 100, 100);
            var p = createSprite(70, 300, 100, 100);

            g.setAnimation("letterG");
            a.setAnimation("letterA");
            m.setAnimation("letterM");
            e.setAnimation("letterE1");
            o.setAnimation("letterO");
            v.setAnimation("letterV");
            e2.setAnimation("letterE2");
            r.setAnimation("letterR");
            p.setAnimation("letterP");

            var num = createSprite(150, 300, 100, 100);

            // Set the sprite for the appropriate winner
            if(gameDone==1)
              num.setAnimation("number1");
            else
              num.setAnimation("number2");
          }

          drawSprites();
        }
      }
    }

// MY CODE ENDS HERE, CODE.ORG CODE STARTS HERE AGAIN
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }

  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
