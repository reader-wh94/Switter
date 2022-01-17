## Twitter clone coding

### What is Firebase?

1. 처음 Firebase는 DB였다. (Google에 인수되지도 않았었다!)

2. Firebase에서 여러가지의 목적에 맞는 기능들을 사용할 수 있다.
   - Cloud Firestore
   - Firebase ML (Machine Learning)
   - Cloud Functions (ex. AWS lambda)
   - Hosting
   - Cloud Storage (ex. AWS S3)
   - Authentication
   - Realtime Database
   - etc .. ..



### What is Amplify?

* Firbase와 유사한 기능을 가진 서비스이다.
* GraphQL APi, REST API 등을 제공해 준다. (Firebase에서는 제공해주지 않음)



### When to use Firebase (or amplify)?

내 아이디어를 빠르고 규모있게 테스트 하고 싶을 때 사용하면 된다! 다만 Firebase나 Amplify를 사용한 서비스의 규모가 커지고 안정화된 경우에는 온전히 나만의 서비스로 바꾸는 것을 추천한다(내 서버나 DB에 고객들 정보가 있는 것이 아니라 AWS나 Firebase를 빌려 사용하기 때문에 그들에게 정보가 있게 되는 셈이다.).

