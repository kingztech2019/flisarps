def handle_image_extractor_uploader(data):
    try:
        # Get the JWT token from the request headers (assuming it's in the 'Authorization' header as a Bearer token)
        auth_header = request.headers.get('Authorization')
        if not auth_header:
            return jsonify({'error': 'Missing JWT token'}), 401

        token = auth_header.split()[1]  # Extract the token from 'Bearer <token>'

        # Use the get_user_from_token function to get the user information
        user = get_user_from_token(token)
        if user is None:
            return jsonify({'error': 'Invalid or expired JWT token'}), 401
        if 'ext_image' in data:
            image_extractor = data['ext_image']

            if not image_extractor:
                return jsonify({'error': 'image_extractor can not be empty'}), 400

            user_data = User.query.filter_by(email=user).first()
            wallet_data = Wallet.query.filter_by(user_id=user_data.id).first()
            print(wallet_data.total_wallet_balance)
            if wallet_data.total_wallet_balance < 100:
                return jsonify({'error': 'Your wallet balance is insufficient to perform this transaction'}), 400
            # Decode the Base64 string
            # Your Base64 encoded image string
            base64_string = image_extractor

            # Decode the Base64 string
            decoded_data = base64.b64decode(base64_string)

            # Create an in-memory binary stream from the decoded data
            image_data = BytesIO(decoded_data)

            # Open the image using PIL (Python Imaging Library)
            image = Image.open(image_data)

            # Create the "upload" folder if it doesn't exist
            upload_folder = "upload"
            os.makedirs(upload_folder, exist_ok=True)

            # Define the file path for the saved image (e.g., upload/image.jpeg)
            dynamic_code=generate_referral_code(8)
            image_path = os.path.join(upload_folder, dynamic_code+"image1.jpeg")

            # Save the image to the specified path
            image.save(image_path)


            api_url = 'https://api.api-ninjas.com/v1/imagetotext'
            image_file_descriptor = open(image_path, 'rb')
            files = {'image': image_file_descriptor}

            # Replace 'YOUR_API_KEY' with your actual API key
            api_key = '0r3lS35W1bcFyBAYu2uL3ZylkCBeMTHe2DsoDOdx'

            # Define headers with the X-Api-Key
            headers = {'X-Api-Key': api_key}

            r = requests.post(api_url, files=files, headers=headers)
            # Extract the "text" values
            extracted_text=r.json()
            text_values = [item["text"] for item in extracted_text]

            # Join the text values to form a sentence
            sentence = " ".join(text_values)
            
            if r.status_code==200:
                wallet_data.wallet_balance=wallet_data.wallet_balance-100
                wallet_data.total_wallet_balance = wallet_data.total_wallet_balance - 100

            print(r.status_code)
            db.session.commit()
            # After you've finished using the image, remove it
            os.remove(image_path)
            # Do whatever processing you want with the "message" data

            return jsonify({'data': sentence,'wallet':wallet_data.wallet_balance}), 201

        else:
            return {'error': 'Invalid JSON data'}

    except Exception as e:
        print(e)
        # Handle any other errors that may occur during token validation or processing
        return jsonify({'error': 'An error occurred'}), 500
