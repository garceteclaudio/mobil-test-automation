cordova.define("@tech/cordova-plugin-serviceOnBoardingSDK.serviceOnBoardingSDK", function(require, exports, module) {
    var exec = require('cordova/exec');

    exports.initialize = function(serverURL, serverAPIKEY, serverArgs, onboardingPin, urlArgs, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "initialize", [serverURL, serverAPIKEY, serverArgs, onboardingPin, urlArgs]);
    };
    
    exports.registerFaceService = function(selfieBodyList, analysisselfieBodyList, userIdentifier, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "registerFaceService", [selfieBodyList, analysisselfieBodyList, userIdentifier, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName]);
    };
    
    exports.loginFaceService = function(selfieBodyList, analysisselfieBodyList, userIdentifier, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName, documentNumber, gender, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "loginFaceService", [selfieBodyList, analysisselfieBodyList, userIdentifier, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName, documentNumber, gender]);
    };
    
    exports.newOperationOnboardingService = function(userIdentifier, ipAddress, deviceHash, rooted, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName, dataAgreement, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "newOperationOnboardingService", [userIdentifier, ipAddress, deviceHash, rooted, applicationVersion, operativeSystem, operativeSystemVersion, deviceManufacture, deviceName, dataAgreement]);
    };
    
    exports.endOperationOnboardingService = function(userIdentifier, operationId, operationGuid, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "endOperationOnboardingService", [userIdentifier, operationId, operationGuid]);
    };
    
    exports.cancelOperationOnboardingService = function(userIdentifier, operationId, operationGuid, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "cancelOperationOnboardingService", [userIdentifier, operationId, operationGuid]);
    };
    
    exports.statusOperationOnboardingService = function(userIdentifier, operationId, operationGuid, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "statusOperationOnboardingService", [userIdentifier, operationId, operationGuid]);
    };
    
    exports.addLocationOnboardingService = function(userIdentifier, operationId, latitude, longitude, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "addLocationOnboardingService", [userIdentifier, operationId, latitude, longitude]);
    };
    
    exports.addFrontOnboardingService = function(userIdentifier, operationId, imageBase64, operationGuid, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "addFrontOnboardingService", [userIdentifier, operationId, imageBase64, operationGuid]);
    };
    
    exports.addDocumentImageOnboardingService = function(userIdentifier, operationId, imageBase64, operationGuid, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "addDocumentImageOnboardingService", [userIdentifier, operationId, imageBase64, operationGuid]);
    };
    
    exports.addBackOnboardingService = function(userIdentifier, operationId, imageBase64, operationGuid, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "addBackOnboardingService", [userIdentifier, operationId, imageBase64, operationGuid]);
    };
    
    exports.addBarcodeOnboardingService = function(userIdentifier, operationId, document, operationGuid, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "addBarcodeOnboardingService", [userIdentifier, operationId, document, operationGuid]);
    };
    
    exports.registerOnboardingService = function(selfieBodyList, analysisselfieBodyList, userIdentifier, operationId, operationGuid, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "registerOnboardingService", [selfieBodyList, analysisselfieBodyList, userIdentifier, operationId, operationGuid]);
    };
    
    exports.scoreOnboardingService = function(userIdentifier, operationId, operationGuid, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "scoreOnboardingService", [userIdentifier, operationId, operationGuid]);
    };
    
    exports.captureFront = function(title, instructions, scanCountry, showTutorial, tutorialTitle, tutorialDescription, faceDetectionMaximumWait, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, focusOnTouch, noDocumentFound, faceNotFound, previewConfirmationTitle, yesPreviewText, noPreviewText, noDocumentFoundTitle, faceNotFoundTitle, okText, enableAudio, showCustomBackground, enableScreenRecording, videoQualityLevel, permissionDeniedTitle, cameraAccessText, enableText, exitText, enableBlur, blurThreshold, blurNotTakePhoto, imageBlurredTitle, imageBlurredMessage, returnExtraImages, extraImagesAmount, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "captureFront", [title, instructions, scanCountry, showTutorial, tutorialTitle, tutorialDescription, faceDetectionMaximumWait, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, focusOnTouch, noDocumentFound, faceNotFound, previewConfirmationTitle, yesPreviewText, noPreviewText, noDocumentFoundTitle, faceNotFoundTitle, okText, enableAudio, showCustomBackground, enableScreenRecording, videoQualityLevel, permissionDeniedTitle, cameraAccessText, enableText, exitText, enableBlur, blurThreshold, blurNotTakePhoto, imageBlurredTitle, imageBlurredMessage, returnExtraImages, extraImagesAmount]);
    };
    
    exports.captureBack = function(title, instructions, scanCountry, barcodeDetectionMaximumWait, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, focusOnTouch, documentNotDetected, codeNotRead, yesText, noText, documentPictureNotDetected, previewConfirmationTitle, yesPreviewText, noPreviewText, enableAudio, showCustomBackground, enableScreenRecording, videoQualityLevel, permissionDeniedTitle, cameraAccessText, enableText, exitText, enableBlur, blurThreshold, blurNotTakePhoto, imageBlurredTitle, imageBlurredMessage, returnExtraImages, extraImagesAmount, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "captureBack", [title, instructions, scanCountry, barcodeDetectionMaximumWait, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, focusOnTouch, documentNotDetected, codeNotRead, yesText, noText, documentPictureNotDetected, previewConfirmationTitle, yesPreviewText, noPreviewText, enableAudio, showCustomBackground, enableScreenRecording, videoQualityLevel, permissionDeniedTitle, cameraAccessText, enableText, exitText, enableBlur, blurThreshold, blurNotTakePhoto, imageBlurredTitle, imageBlurredMessage, returnExtraImages, extraImagesAmount]);
    };
    
    exports.detectFront = function(title, instructions, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, documentNotDetected, codeNotRead, yesText, noText, captureTimeOut, barCodeCaptureTimeOut, qrTutorialTitle, qrTutorialDescription, enableAudio, showCustomBackground, enableScreenRecording, videoQualityLevel, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "detectFront", [title, instructions, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, documentNotDetected, codeNotRead, yesText, noText, captureTimeOut, barCodeCaptureTimeOut, qrTutorialTitle, qrTutorialDescription, enableAudio, showCustomBackground, enableScreenRecording, videoQualityLevel]);
    };
    
    exports.detectBack = function(title, instructions, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, documentNotDetected, codeNotRead, yesText, noText, captureTimeOut, barCodeCaptureTimeOut, qrTutorialTitle, qrTutorialDescription, enableAudio, showCustomBackground, enableScreenRecording, videoQualityLevel, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "detectBack", [title, instructions, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, documentNotDetected, codeNotRead, yesText, noText, captureTimeOut, barCodeCaptureTimeOut, qrTutorialTitle, qrTutorialDescription, enableAudio, showCustomBackground, enableScreenRecording, videoQualityLevel]);
    };
    
    exports.captureSelfie = function(gesturesAmount, disableFaceMoveGesture, maxInactivitySeconds, maxResetsBeforeBlock, smileText, closeEyesText, winkEyeText, moveFaceToLeftText, moveFaceToRightText, smileMinSeconds, smileMaxSeconds, winkMinSeconds, winkMaxSeconds, eyesClosedMinSeconds, eyesClosedMaxSeconds, minimumAngle, maxAngleJumpAllowed,  showTutorial, tutorialTitle, tutorialDescription,  tutorialNextButtonText, color,  closeText, buttonCloseEnabled, buttonTutorialCloseEnabled, faceCenterText, smileMinimumScore, winkMinimumScore, eyesClosedMinimumScore, minimumValidGestures, hideCircleProgressBar, hideGestureInstructionAnimation, backgroundColor, textColor, returnAnalysisSelfies, textStepsMoveToBottom, progressBarColor, progressCirclesColor, validateFrames, clearBackgroundRecommendation, lightEnvironmentRecommendation, clearFaceRecommendation, centerMobileRecommendation, resultsTitle, resultsSubtitle, resultsContinueButtonText, watchRecommendationsAgain, smileHelpText, winkHelpText, closeEyesHelpText, moveFaceHelpText, placeFaceInSilhouette, keepMobileFirm, avoidMobileMoves, clearBackgroundProcessRecommendation, cameraNotAvailableTitle, cameraNotAvailableDescription, understoodText, processingText, showRoundedTopBar, topBarTitle, hideInstructionsText, hideSoundButton, showCloseButtonBorders, showStageIndicator, stageIndicatorColor, beginWithoutPreview, centerInstructionGif, showLargeSoundIndicator, soundIndicatorInstructions, disableWinkGesture, disableEyesClosedGesture, disableSmileGesture, showResultInFailure, showFullScreenLoader, validatingText, middleInstructionGif, welcomeText, showFinalMessage, finalSuccessMessage, finalFailMessage, resultsCompactVersion, showCenterProgressCircle, centerProgressCircleColor, disableWelcomeAudio, disableInstructionsAudios, showLeftInstructionGif, showHorizontalProgress, showBottomTip, bottomTipText, showBottomCloseText, bottomCloseTextColor, bottomCloseText, enableScreenRecording, videoQualityLevel, permissionDeniedTitle, cameraAccessText, enableText, exitText, enableStartupDarkEffect, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "captureSelfie", [gesturesAmount, disableFaceMoveGesture,	maxInactivitySeconds, maxResetsBeforeBlock, smileText, closeEyesText, winkEyeText, moveFaceToLeftText, moveFaceToRightText, smileMinSeconds, smileMaxSeconds, winkMinSeconds, winkMaxSeconds, eyesClosedMinSeconds, eyesClosedMaxSeconds, minimumAngle, maxAngleJumpAllowed,  showTutorial, tutorialTitle, tutorialDescription,  tutorialNextButtonText, color,  closeText, buttonCloseEnabled, buttonTutorialCloseEnabled, faceCenterText, smileMinimumScore, winkMinimumScore, eyesClosedMinimumScore, minimumValidGestures, hideCircleProgressBar, hideGestureInstructionAnimation, backgroundColor, textColor, returnAnalysisSelfies, textStepsMoveToBottom, progressBarColor, progressCirclesColor, validateFrames, clearBackgroundRecommendation, lightEnvironmentRecommendation, clearFaceRecommendation, centerMobileRecommendation, resultsTitle, resultsSubtitle, resultsContinueButtonText, watchRecommendationsAgain, smileHelpText, winkHelpText, closeEyesHelpText, moveFaceHelpText, placeFaceInSilhouette, keepMobileFirm, avoidMobileMoves, clearBackgroundProcessRecommendation, cameraNotAvailableTitle, cameraNotAvailableDescription, understoodText, processingText, showRoundedTopBar, topBarTitle, hideInstructionsText, hideSoundButton, showCloseButtonBorders, showStageIndicator, stageIndicatorColor, beginWithoutPreview, centerInstructionGif, showLargeSoundIndicator, soundIndicatorInstructions, disableWinkGesture, disableEyesClosedGesture, disableSmileGesture, showResultInFailure, showFullScreenLoader, validatingText, middleInstructionGif, welcomeText, showFinalMessage, finalSuccessMessage, finalFailMessage, resultsCompactVersion, showCenterProgressCircle, centerProgressCircleColor, disableWelcomeAudio, disableInstructionsAudios, showLeftInstructionGif, showHorizontalProgress, showBottomTip, bottomTipText, showBottomCloseText, bottomCloseTextColor, bottomCloseText, enableScreenRecording, videoQualityLevel, permissionDeniedTitle, cameraAccessText, enableText, exitText, enableStartupDarkEffect]);
    };
    
    exports.captureQR = function(title, instructions, scanCountry, barcodeDetectionMaximumWait, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, previewConfirmationTitle, yesPreviewText, noPreviewText, enableScreenRecording, videoQualityLevel, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "captureQR", [title, instructions, scanCountry, barcodeDetectionMaximumWait, showTutorial, tutorialTitle, tutorialDescription, tutorialNextButtonText, showPreview, previewConfirmationText, color, buttonCloseTutorialEnabled, previewConfirmationTitle, yesPreviewText, noPreviewText, enableScreenRecording, videoQualityLevel]);
    };
    
    exports.getPlatformName = function(success, error) {
        exec(success, error, "serviceOnBoardingSDK", "getPlatformName", []);
    };
    
    exports.performLocalNativeAuthentication = function(success, error) {
        exec(success, error, "serviceOnBoardingSDK", "performLocalNativeAuthentication", []);
    };
    
    exports.startRecording = function(videoQualityLevel, landscapeMode, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "startRecording", [videoQualityLevel, landscapeMode]);
    };
    
    exports.stopRecording = function(success, error) {
        exec(success, error, "serviceOnBoardingSDK", "stopRecording", []);
    };
    
    exports.parseDocument = function(rawValue, scanCountry, success, error) {
        exec(success, error, "serviceOnBoardingSDK", "parseDocument", [rawValue, scanCountry]);
    };
});
