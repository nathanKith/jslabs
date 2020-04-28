function putData() {
    const file = document.getElementById("myFileLoad").files[0];
    if (file.length === 0) {
        firebase.database().ref().push({
            username: myName.value,
            email: myEmail.value,
            phoneNumber: myPhoneNumber.value,
            description: myDescription.value,
        }, function (error) {
            if (error) {
                alert("Все плохо.");
            } else {
                alert("Все классно");
            }
        }
        );
    }
    else {
        var uploadTask = firebase.storage().ref('images/' + file.name).put(file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED:
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING:
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {

                switch (error.code) {
                    case 'storage/unauthorized':

                        break;

                    case 'storage/canceled':

                        break;

                    case 'storage/unknown':

                        break;
                }
            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                    firebase.database().ref().push({
                        username: myName.value,
                        email: myEmail.value,
                        phoneNumber: myPhoneNumber.value,
                        description: myDescription.value,
                        blob: downloadURL
                    }, function (error) {
                        if (error) {
                            alert("Все плохо.");
                        } else {
                            alert("Все классно");
                        }
                    }
                    );
                });
            });
    }
}
