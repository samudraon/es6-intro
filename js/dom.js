document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
});

document.getElementById('center-third').addEventListener('click', function () {
    const thirdFriend = document.getElementById('third-friend');
    thirdFriend.style.textAlign = 'center';
});

document.getElementById('add-friend').addEventListener('click', function () {
    const friendsContainer = document.getElementById('friends-container');
    const div = document.createElement('div');
    div.classList.add('friend');
    div.innerHTML = `
    <h3>New Friend</h3>
    <p>something new added</p>
    `
    friendsContainer.appendChild(div);
});