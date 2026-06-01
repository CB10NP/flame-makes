<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8" />  
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
    <title>Kahoot Clone</title>  
    <style>  
        /* ===== RESET & BASE ===== */  
        * {  
            margin: 0;  
            padding: 0;  
            box-sizing: border-box;  
        }  

        body {  
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;  
            background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);  
            min-height: 100vh;  
            display: flex;  
            justify-content: center;  
            align-items: center;  
            padding: 20px;  
        }  

        /* ===== CONTAINER ===== */  
        .game-container {  
            background: #1a1a2e;  
            border-radius: 24px;  
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);  
            width: 100%;  
            max-width: 780px;  
            overflow: hidden;  
            position: relative;  
        }  

        /* ===== SCREENS ===== */  
        .screen {  
            display: none;  
            padding: 32px 28px;  
            animation: fadeIn 0.4s ease;  
        }  

        .screen.active {  
            display: block;  
        }  

        @keyframes fadeIn {  
            from {  
                opacity: 0;  
                transform: translateY(20px);  
            }  
            to {  
                opacity: 1;  
                transform: translateY(0);  
            }  
        }  

        /* ===== START SCREEN ===== */  
        .start-screen {  
            text-align: center;  
            padding: 48px 28px;  
        }  

        .logo {  
            font-size: 52px;  
            font-weight: 900;  
            background: linear-gradient(135deg, #ff006e, #ffbe0b, #3a86ff);  
            -webkit-background-clip: text;  
            -webkit-text-fill-color: transparent;  
            background-clip: text;  
            margin-bottom: 8px;  
            letter-spacing: -1px;  
        }  

        .logo-sub {  
            color: #8b8ba7;  
            font-size: 16px;  
            margin-bottom: 32px;  
            letter-spacing: 2px;  
        }  

        .start-form {  
            display: flex;  
            flex-direction: column;  
            align-items: center;  
            gap: 16px;  
        }  

        .start-form input {  
            width: 100%;  
            max-width: 340px;  
            padding: 14px 20px;  
            font-size: 18px;  
            border: 2px solid #2d2d4a;  
            border-radius: 12px;  
            background: #16163a;  
            color: #fff;  
            outline: none;  
            transition: border-color 0.3s;  
            text-align: center;  
        }  

        .start-form input:focus {  
            border-color: #3a86ff;  
        }  

        .start-form input::placeholder {  
            color: #5a5a7a;  
        }  

        .btn-start {  
            padding: 14px 48px;  
            font-size: 20px;  
            font-weight: 700;  
            border: none;  
            border-radius: 12px;  
            background: linear-gradient(135deg, #ff006e, #ffbe0b);  
            color: #fff;  
            cursor: pointer;  
            transition: transform 0.2s, box-shadow 0.2s;  
            text-transform: uppercase;  
            letter-spacing: 1px;  
        }  

        .btn-start:hover {  
            transform: scale(1.05);  
            box-shadow: 0 8px 32px rgba(255, 0, 110, 0.4);  
        }  

        .btn-start:disabled {  
            opacity: 0.5;  
            cursor: not-allowed;  
            transform: none
