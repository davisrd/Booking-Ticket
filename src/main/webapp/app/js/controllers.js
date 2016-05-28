'use strict';

/* Controllers */

var bookingTicketControllers = angular.module('bookingTicketControllers', ['ui.bootstrap', 'datatables']);
bookingTicketControllers.run(function($rootScope, $uibModal, $location) {
	$rootScope.user = {};
	$rootScope.selectedRent = {};
	$rootScope.selectedReservation = {};
	$rootScope.selectedRoom = {};
	$rootScope.selectedDate = {};
	$rootScope.rent={};
	$rootScope.reservation={};
	
	$rootScope.popup1 = {
		opened: false
	};
	$rootScope.open1 = function() {
		$rootScope.popup1.opened = true;
	};
	$rootScope.popup2 = {
		opened: false
	};
	$rootScope.open2 = function() {
		$rootScope.popup2.opened = true;
	};
		
	$rootScope.dateFormat = 'dd-MMMM-yyyy';

	$rootScope.user.userCode = 'UMRG00001';
	$rootScope.user.userName = 'Sudarman';
	
	$rootScope.message = '';
	$rootScope.nextPath = '';
	$rootScope.openMessage = function (controller, message) {
		var modalInstance = $uibModal.open({
		  animation: true,
		  templateUrl: 'partials/MessageModal.html',
		  controller: controller,
		  windowClass: 'center-modal'
		});
	};
	
	$rootScope.goTo = function(path) {
		$location.path(path);
	}


	$rootScope.eventCategoryName;
	$rootScope.eventCategoryCode;
	$rootScope.eventTypeName;
	$rootScope.eventTypeCode;
	$rootScope.rentReservationStatusName;
	$rootScope.rentReservationStatusCode;
	$rootScope.eventScaleName;
	$rootScope.eventScaleCode;
	$rootScope.reservationPhaseName;
	$rootScope.reservationPhaseCode;
	$rootScope.rentPhaseName;
	$rootScope.rentPhaseCode;
	$rootScope.roomTypeName;
	$rootScope.roomTypeCode;
	
	$rootScope.$watch('eventCategoryCode', function(newValue, oldValue) {
		if(newValue == 'B') $rootScope.eventCategoryName = 'Bisnis'
		if(newValue == 'N') $rootScope.eventCategoryName = 'Non-Bisnis'
		if(newValue == 'S') $rootScope.eventCategoryName = 'Sosial'
	});
	
	$rootScope.$watch('rentReservationStatusCode', function(newValue, oldValue) {
		if(newValue == 'N') $rootScope.rentReservationStatusName = 'Pengajuan Baru'
		if(newValue == 'M') $rootScope.rentReservationStatusName = 'Pengajuan Pemindahan'
		if(newValue == 'C') $rootScope.rentReservationStatusName = 'Dibatalkan'
	});

	$rootScope.$watch('eventScaleCode', function(newValue, oldValue) {
		if(newValue == '1') $rootScope.eventScaleName = 'Organisasi'
		if(newValue == '2') $rootScope.eventScaleName = 'POLBAN'
		if(newValue == '3') $rootScope.eventScaleName = 'Kota'
		if(newValue == '4') $rootScope.eventScaleName = 'Provinsi'
		if(newValue == '5') $rootScope.eventScaleName = 'Nasional'
		if(newValue == '6') $rootScope.eventScaleName = 'Internasional'
	});

	$rootScope.$watch('eventTypeCode', function(newValue, oldValue) {
		if(newValue == 'A') $rootScope.eventTypeName = 'Akademik'
		if(newValue == 'H') $rootScope.eventTypeName = 'Himpunan / UKM'
		if(newValue == 'J') $rootScope.eventTypeName = 'Jurusan'
		if(newValue == 'M') $rootScope.eventTypeName = 'Manajemen'
	});
	
	$rootScope.$watch('reservationPhaseCode', function(newValue, oldValue) {
		if(newValue == '1') $rootScope.rentReservationStatusName = 'Dalam proses Kasubbag TU'
		if(newValue == '2') $rootScope.rentReservationStatusName = 'Dalam proses Pengelola Ruangan Khusus'
		if(newValue == '3') $rootScope.rentReservationStatusName = 'Diizinkan Kasubbag TU'
		if(newValue == '4') $rootScope.rentReservationStatusName = 'Diizinkan Pengelola Ruangan Khusus'
		if(newValue == '5') $rootScope.rentReservationStatusName = 'Tidak Diizinkan Pengelola Ruangan Khusus'
		if(newValue == '6') $rootScope.rentReservationStatusName = 'Tidak Diizinkan Kasubbag TU'
	});

	$rootScope.$watch('rentPhaseCode', function(newValue, oldValue) {
		if(newValue == '1') $rootScope.eventScaleName = 'Dalam proses Direktur'
		if(newValue == '2') $rootScope.eventScaleName = 'Dalam proses Kasubbag TU'
		if(newValue == '3') $rootScope.eventScaleName = 'Dalam proses KPKNL'
		if(newValue == '4') $rootScope.eventScaleName = 'Konfirmasi Pembayaran'
		if(newValue == '5') $rootScope.eventScaleName = 'Diizinkan Direktur'
		if(newValue == '6') $rootScope.eventScaleName = 'Diizinkan Kasubbag TU'
		if(newValue == '7') $rootScope.eventScaleName = 'Tidak Diizinkan Direktur'
		if(newValue == '8') $rootScope.eventScaleName = 'Tidak Diizinkan KPKNL'
	});

	$rootScope.$watch('roomTypeCode', function(newValue, oldValue) {
		if(newValue == 'S') $rootScope.roomTypeName = 'Ruangan Khusus'
		if(newValue == 'G') $rootScope.roomTypeName = 'Ruangan Umum'
	});

})
.controller('DashboardCtrl', function($rootScope){
	if($rootScope.user.userName == undefined){
		console.log($rootScope.user.username);
		//$rootScope.goTo('/login');
	}
})
.controller('LoginCtrl', function($rootScope, $scope){
	$scope.userLogin = {};
	$scope.login = function(){
		$rootScope.user.userName = $scope.userLogin.username;
		$rootScope.user.password = $scope.userLogin.password;
		$rootScope.goTo('/dashboard');
	}
});

bookingTicketControllers.controller('MessageModalCtrl', function($scope, $rootScope, $uibModalInstance, $location) {
	$scope.close = function(){
		$uibModalInstance.close();
		$location.path($rootScope.nextPath);
	}
});

bookingTicketControllers.controller('navigationTemplateCtrl',function($scope) {
    $scope.navBar = 1;
	
	$scope.selectNavBar = function(navBarCode){
		$scope.navBar = navBarCode;
	}
	
	$scope.isActive = function(navBarCode){
		if( $scope.navBar == navBarCode) return 'active';
		else return '';
	}
  });

bookingTicketControllers.controller('ReservationRequestListCtrl', function($scope, $rootScope, Reservation) {
	$scope.listOfReservation = Reservation.query();
	$rootScope.selectedReservation = {};
	$scope.isSelected = function(reservation){
		if($rootScope.selectedReservation == reservation){ 
			return "selected";
		}
		else return '';
	};

	$scope.selectReservation = function(reservation){
		$rootScope.eventTypeCode = reservation.eventType;
		$rootScope.eventScaleCode = reservation.eventScale;
		$rootScope.rentReservationStatusCode = reservation.reservationStatus;
		$rootScope.selectedReservation = reservation;
		$rootScope.roomTypeCode = reservation.room.roomCode.substring(1,2);
	};

	$scope.viewReservationDetail = function(){
		if($rootScope.selectedReservation.reservationCode != undefined){
			$rootScope.goTo('/reservationDetail');
		} else {
			alert('Peminjaman belum dipilih');
		}
	}
});

bookingTicketControllers.controller('ReservationRoomSelectionCtrl', function($scope, $rootScope, Service, $location) {
	$scope.listOfRoom;
	$scope.selectedDateTime = {};
	$rootScope.selectedRoom = {};

	$scope.selectedDateTime.startTime = "00:00";
	$scope.selectedDateTime.endTime = "00:00";

	Service.getReservationRoom().then(function success(data) {
	 	$scope.listOfRoom = data.data;
    }, function error(error){
        console.log(error);
    });
	
	$('.clockpicker1').clockpicker().find('input').change(function(){
		$scope.selectedDateTime.startTime = this.value;
	});;

	$('.clockpicker2').clockpicker().find('input').change(function(){
		$scope.selectedDateTime.endTime = this.value;
	});;

	$scope.selectRoom = function(room){
		$rootScope.selectedRoom = room;
	};
	
	$scope.validateData = function(path){
		if($rootScope.selectedRoom.roomCode != undefined){
			if($scope.selectedDateTime.startDate !=undefined) {
				if($scope.selectedDateTime.endDate !=undefined) {
					$rootScope.selectedDate.startDate = moment(moment($scope.selectedDateTime.startDate).format("DD-MM-YYYY") + ' ' + $scope.selectedDateTime.startTime, 'DD-MM-YYYY HH:mm').toDate();
					$rootScope.selectedDate.endDate = moment(moment($scope.selectedDateTime.endDate).format("DD-MM-YYYY") + ' ' + $scope.selectedDateTime.endTime, 'DD-MM-YYYY HH:mm').toDate();
					$location.path(path);
				} else {
					alert('Tanggal selesai harus diisi!');
				}
			} else {
				alert('Tanggal mulai harus diisi!');
			}
		} else {
			alert('Ruangan harus dipilih!');
		}
	}
});


bookingTicketControllers.controller('FormPembatalanCtrl', function($scope, $rootScope) {
	$scope.reservation = {
		reservationId: 1,
		eventUserName: "Himakom",
		reservationStartDate: "17-04-2016",
		reservationEndDate: "20-04-2016",
		room: {
			roomId: 1,
			roomName: "RSG",
			roomType: "Diijinkan"
		},
		eventName: "Studi Banding",
		eventType: "Studi Banding",
		reservationStatus: true
	};

	$scope.selectReservation = function(reservation){
		$rootScope.selectedReservation = reservation;
	};
});

bookingTicketControllers.controller('ReservationFormCtrl', function($scope, $rootScope, Reservation) {	
	$scope.reservation = new Reservation();
	$scope.reservation.reservationDateStart = $rootScope.selectedDate.startDate;
	$scope.reservation.reservationDateEnd = $rootScope.selectedDate.endDate;
	$scope.reservation.reservationStatus = 'N';
	$scope.reservation.reservationPhase = '1';

	$scope.reservation.room = $rootScope.selectedRoom;
	$scope.reservation.user = $rootScope.user;
	
	$scope.createPeminjam = function(){
		console.log($scope.reservation);
		  $scope.reservation.$save(function(){
			
			$rootScope.message = 'Form Sukses Disubmit';
			$rootScope.nextPath = '/reservationRequestList';
			$rootScope.openMessage('MessageModalCtrl');
			// $rootScope.goTo('/reservationRequestList');
		  });
	  };
	
	$scope.selectRoom = function(room){
		$rootScope.selectedRoom = room;
	};
});

bookingTicketControllers.controller('RentFormCtrl', function($scope, $rootScope, Rent) {
	$scope.rent = new Rent();
	
	$scope.rent.rentDateStart = $rootScope.selectedDate.startDate;
	$scope.rent.rentDateEnd = $rootScope.selectedDate.endDate;
	$scope.rent.eventCategory = $rootScope.eventCategoryCode;
	$scope.rent.rentStatus = 'N';
	$scope.rent.rentPhase = '1';

	$scope.rent.room = $rootScope.selectedRoom;
	$scope.rent.user = $rootScope.user;

	$scope.createRent = function(){
		console.log($scope.rent);
		  $scope.rent.$save(function(){
			$rootScope.message = 'Form Sukses Disubmit';
			$rootScope.nextPath = '/rentRequestList';
			$rootScope.openMessage('MessageModalCtrl');
			// $rootScope.goTo('/rentRequestList');
		  });
	  };
});

bookingTicketControllers.controller('ReservationChangeFormCtrl', function($scope, $rootScope) {
	$scope.reservation = {
		reservationId: 1,
		eventUserName: "Himakom",
		reservationStartDate: "17-04-2016",
		reservationEndDate: "20-04-2016",
		room: {
			roomId: 1,
			roomName: "RSG",
			roomType: "Diijinkan"
		},
		eventName: "Studi Banding",
		eventType: "Studi Banding",
		reservationStatus: true
	};

	$scope.selectReservation = function(reservation){
		$rootScope.selectedReservation = reservation;
	};
})

bookingTicketControllers.controller('ReservationDetailCtrl', function($scope, $rootScope) {
})

bookingTicketControllers.controller('ReservationCancelFormCtrl', function($scope, $rootScope) {
	$scope.reservation = {
		reservationId: 1,
		eventUserName: "Himakom",
		reservationStartDate: "17-04-2016",
		reservationEndDate: "20-04-2016",
		eventName: "Seminar International",
		eventType: "Kegiatan Mahasiswa",
		eventScale: "International",
		totalAudience : "200 orang",
		room: {
			roomId: 1,
			roomName: "RSG",
			roomType: "Fasilitas Umum"
		},
		reservationStatus: "Diizinkan"
		
	};

	$scope.selectReservation = function(reservation){
		$rootScope.selectedReservation = reservation;
	};
})

bookingTicketControllers.controller('RentDetailCtrl', function($scope, $rootScope) {

})

bookingTicketControllers.controller('FormPemindahanPenyewaanCtrl', function($scope, $rootScope, Service) {
	
});
bookingTicketControllers.controller('FormPemPenyewaanCtrl', function($scope, $rootScope) {
	$scope.reservation = {
		reservationId: 1,
		eventUserName: "Jaki",
		reservationStartDate: "18-04-2016",
		reservationEndDate: "18-04-2016",
		eventName: "Pernikahan",
		eventType: "Diijinkan",
		facility: {
			facilityId: 1,
			facilityName: "Ruang Utama Pendopo Agung",
			facilityPrice: "10.000.000"
		},
		eventName: "Studi Banding",
		eventType: "Studi Banding",
		reservationStatus: true
	};

	$scope.selectReservation = function(reservation){
		$rootScope.selectedReservation = reservation;
	};
});
bookingTicketControllers.controller('RentRequestListCtrl', function($scope, $rootScope, $uibModal, Rent) {
	$scope.listOfRent = Rent.query();
	
	$scope.open = function () {
		var modalInstance = $uibModal.open({
		  animation: $scope.animationsEnabled,
		  templateUrl: 'partials/RentRequestModal.html',
		  controller: 'RentRequestModalCtrl',
		  size: 'xl',
		});
	};
	
	$scope.isSelected = false;
	
	$scope.selectRent = function(rent){
		$rootScope.eventCategoryCode = rent.eventCategory;
		$rootScope.rentReservationStatusCode = rent.rentStatus;
		$rootScope.selectedRent = rent;
		$scope.isSelected = true;
	};

	$scope.viewRentDetail = function(){
		if($rootScope.selectedRent.rentCode != undefined){
			$rootScope.goTo('/rentDetail');
		} else {
			alert('Penyewaan belum dipilih');
		}
	}
});

bookingTicketControllers.controller('RentRequestModalCtrl', function($scope, $rootScope, $uibModalInstance) {
	$scope.setRentType = function(eventCategory){
		$rootScope.rent.eventCategory = eventCategory;
		$rootScope.eventCategoryCode = eventCategory;
		$uibModalInstance.close();
	}
});

bookingTicketControllers.controller('RentRoomSelectionCtrl', function($scope, $rootScope, $location, RentRoom, Service) {
	$scope.listOfRoom = RentRoom.query({id:$rootScope.eventCategoryCode});
	$scope.period = {};
	
	$scope.selectRoom = function(room){
		$rootScope.selectedRoom = room;
	};

	$scope.validateData = function(path){
		if($rootScope.selectedRoom.roomCode != undefined){
			if($rootScope.selectedDate.startDate !=undefined) {
				if($scope.period.value !=undefined) {
					$rootScope.selectedDate.startDate = moment($rootScope.selectedDate.startDate).toDate();

					switch($scope.period.valueType){
						case 1:
							$rootScope.selectedDate.endDate = moment($rootScope.selectedDate.startDate).add($scope.period.value, 'hours').toDate();
							break;
						case 2:
							$rootScope.selectedDate.endDate = moment($rootScope.selectedDate.startDate).add($scope.period.value, 'days').toDate();
							break;
						case 3:
							$rootScope.selectedDate.endDate = moment($rootScope.selectedDate.startDate).add($scope.period.value, 'months').toDate();
							break;
						case 4:
							$rootScope.selectedDate.endDate = moment($rootScope.selectedDate.startDate).add($scope.period.value, 'years').toDate();
							break;
						default:
							$rootScope.selectedDate.endDate = moment($rootScope.selectedDate.startDate).add($scope.period.value, 'days').toDate();
							break;
					}

					// $rootScope.selectedDate.endDate = moment($rootScope.selectedDate.endDate).format("DD-MMM-YYYY HH:mm");
					// Service.getRentRoomAvailibility($rootScope.selectedRoom.roomCode, $rootScope.selectedDate.startDate, $rootScope.selectedDate.endDate).then(
					// 	function success(data){
					// 		console.log(data);
							$location.path(path);
						// },
						// function error(error){
						// 	alert('Error : ' + error);
						// })
				} else {
					alert('Periode harus diisi!');
				}
			} else {
				alert('Tanggal mulai harus diisi!');
			}
		} else {
			alert('Ruangan harus dipilih!');
		}
	}
});

bookingTicketControllers.controller('ReservationRequestApprovalListCtrl', function($scope, $rootScope, Reservation) {
	$scope.listOfReservation = Reservation.query();
	
	$scope.selectReservation = function(reservation) {
		$rootScope.eventTypeCode = reservation.eventType;
		$rootScope.eventScaleCode = reservation.eventScale;
		$rootScope.rentReservationStatusCode = reservation.reservationStatus;
		$rootScope.selectedReservation = reservation;
		$rootScope.roomTypeCode = reservation.room.roomCode.substring(1,2);
	}

	$scope.viewReservationApprovalDetail = function(){
		if($rootScope.selectedReservation.reservationCode != undefined){
			$rootScope.goTo('/reservationApprovalDetail');
		} else {
			alert('Peminjaman belum dipilih');
		}
	}
});

bookingTicketControllers.controller('RentRequestApprovalListCtrl', function($scope, $rootScope, Rent) {
	$scope.listOfRent = Rent.query();
	
	$scope.selectRent = function(rent) {
		$rootScope.eventCategoryCode = rent.eventCategory;
		$rootScope.rentReservationStatusCode = rent.rentStatus;
		$rootScope.selectedRent = rent;
	}

	$scope.viewRentApprovalDetail = function(){
		if($rootScope.selectedRent.rentCode != undefined){
			$rootScope.goTo('/rentApprovalDetail');
		} else {
			alert('Penyewaan belum dipilih');
		}
	}
});

bookingTicketControllers.controller('MemorandumFormCtrl', function($scope) {
	$scope.memorandum = {};
});

bookingTicketControllers.controller('ReservationRejectionDetailCtrl', function($scope, $rootScope) {
	$scope.open = function () {
		$rootScope.message = 'Form sukses disubmit';
		$rootScope.nextPath = '/reservationRequestApprovalList';
		$rootScope.openMessage('MessageModalCtrl');
	};
});

bookingTicketControllers.controller('RentRejectionDetailCtrl', function($scope, $rootScope) {
	$scope.open = function () {
		$rootScope.message = 'Form sukses disubmit';
		$rootScope.nextPath = '/rentRequestApprovalList';
		$rootScope.openMessage('MessageModalCtrl');
	};
});

bookingTicketControllers.controller('ReservationApprovalDetailCtrl', function($scope, $rootScope, Reservation) {
	$scope.reservation = new Reservation();
	$scope.reservation = $rootScope.selectedReservation;
	$scope.approveEvent = function () {
		$scope.reservation.reservationPhase = "3"; // Belum ada kondisi untuk pengelola khusus
		$scope.reservation.$update(function(){
			$rootScope.message = 'Peminjaman Diizinkan';
			$rootScope.nextPath = '/reservationRequestApprovalList';
			$rootScope.openMessage('MessageModalCtrl');
		  });
		// Service.updateReservation($rootScope.selectedReservation.reservationCode);
	};
});

bookingTicketControllers.controller('RentApprovalDetailCtrl', function($scope, $rootScope, Rent) {
	$scope.rent = new Rent();
	$scope.rent = $rootScope.selectedRent;

	$scope.approveEvent = function () {
		$scope.rent.rentPhase = "5";
		$scope.rent.$update(function(){
			$rootScope.message = 'Penyewaan Diizinkan';
			$rootScope.nextPath = '/rentRequestApprovalList';
			$rootScope.openMessage('MessageModalCtrl');
		 });
	};
});

bookingTicketControllers.controller('CollidedReservationApprovalDetailCtrl', function($scope, $rootScope) {
	$scope.openRecommendedEvent = function () {
		$rootScope.message = 'Rekomendasi Kegiatan yang diizinkan<br>';
		$rootScope.nextPath = '/collidedReservationApprovalDetail';
		$rootScope.openMessage('MessageModalCtrl');
	};
	
	$scope.openApproveEvent = function () {
		$rootScope.message = 'Peminjaman Diizinkan';
		$rootScope.nextPath = '/reservationRequestApprovalList';
		$rootScope.openMessage('MessageModalCtrl');
	};
});

bookingTicketControllers.controller('RoomScheduleSelectionCtrl', function($scope, $rootScope, Room) {
	var vm = this;

    //These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'month';
    vm.viewDate = new Date();
    vm.events = [
      {
        title: 'An event',
        type: 'warning',
        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true
      }, {
        title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        type: 'info',
        startsAt: moment().subtract(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true
      }, {
        title: 'This is a really long event title that occurs on every year',
        type: 'important',
        startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'year',
        draggable: true,
        resizable: true
      }
    ];

    vm.isCellOpen = true;

    vm.eventClicked = function(event) {
      alert.show('Clicked', event);
    };

    vm.eventEdited = function(event) {
      alert.show('Edited', event);
    };

    vm.eventDeleted = function(event) {
      alert.show('Deleted', event);
    };

    vm.eventTimesChanged = function(event) {
      alert.show('Dropped or resized', event);
    };

    vm.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };
});

// $location.path( '/new-page.html' ); fungsi buat pindah page. bisi ada yg butuh