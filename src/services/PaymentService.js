// src/services/PaymentService.js
import axios from 'axios'

class PaymentService {
  constructor() {
    // Payment Gateway Configuration
    this.razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_HERE'
    this.baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api'
    
    // Initialize Razorpay
    this.loadRazorpayScript()
  }

  // Load Razorpay script dynamically
  loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true)
        return
      }

      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  // Create payment order (backend call)
  createPaymentOrder = async (orderData) => {
    try {
      // In production, this would call your backend API
      // For now, we'll simulate the response
      console.log('Creating payment order:', orderData)
      
      // Simulated backend response
      const mockResponse = {
        success: true,
        order: {
          id: `order_${Date.now()}`,
          amount: orderData.amount,
          currency: 'INR',
          notes: orderData.notes
        }
      }

      // In production, uncomment and use this:
      // const response = await axios.post(`${this.baseURL}/payment/create-order`, orderData)
      // return response.data

      return mockResponse
    } catch (error) {
      console.error('Error creating payment order:', error)
      throw new Error('Failed to create payment order')
    }
  }

  // Process Razorpay payment
  processRazorpayPayment = async (paymentData) => {
    const isScriptLoaded = await this.loadRazorpayScript()
    
    if (!isScriptLoaded) {
      throw new Error('Razorpay SDK failed to load')
    }

    return new Promise((resolve, reject) => {
      const options = {
        key: this.razorpayKey,
        amount: paymentData.amount,
        currency: paymentData.currency || 'INR',
        name: 'NAMMA WEB LLP',
        description: paymentData.description,
        image: '/download.png',
        order_id: paymentData.orderId,
        handler: async (response) => {
          try {
            // Verify payment with backend
            const verificationResult = await this.verifyPayment(response)
            resolve(verificationResult)
          } catch (error) {
            reject(error)
          }
        },
        prefill: {
          name: paymentData.customerName,
          email: paymentData.customerEmail,
          contact: paymentData.customerPhone
        },
        notes: paymentData.notes,
        theme: {
          color: '#B4A5FF'
        },
        modal: {
          ondismiss: () => {
            reject(new Error('Payment cancelled by user'))
          }
        }
      }

      const razorpayInstance = new window.Razorpay(options)
      razorpayInstance.open()
    })
  }

  // Verify payment with backend
  verifyPayment = async (paymentResponse) => {
    try {
      console.log('Verifying payment:', paymentResponse)
      
      // In production, this would call your backend for verification
      // For now, we'll simulate success
      const mockVerification = {
        success: true,
        paymentId: paymentResponse.razorpay_payment_id,
        orderId: paymentResponse.razorpay_order_id,
        signature: paymentResponse.razorpay_signature,
        status: 'verified'
      }

      // In production, uncomment and use this:
      // const response = await axios.post(`${this.baseURL}/payment/verify`, {
      //   razorpay_payment_id: paymentResponse.razorpay_payment_id,
      //   razorpay_order_id: paymentResponse.razorpay_order_id,
      //   razorpay_signature: paymentResponse.razorpay_signature
      // })
      // return response.data

      return mockVerification
    } catch (error) {
      console.error('Payment verification failed:', error)
      throw new Error('Payment verification failed')
    }
  }

  // PayPal integration (for international payments)
  processPayPalPayment = async (paymentData) => {
    try {
      // PayPal integration would go here
      console.log('Processing PayPal payment:', paymentData)
      
      // For now, show alert about PayPal integration
      alert('PayPal integration coming soon! Please use Razorpay for now.')
      
      return {
        success: false,
        message: 'PayPal integration not yet implemented'
      }
    } catch (error) {
      console.error('PayPal payment failed:', error)
      throw new Error('PayPal payment processing failed')
    }
  }

  // Main payment processing method
  processPayment = async (paymentData) => {
    try {
      // Create order first
      const orderResponse = await this.createPaymentOrder({
        amount: paymentData.amount * 100, // Convert to paise for Razorpay
        currency: paymentData.currency || 'INR',
        notes: {
          courseName: paymentData.courseName,
          studentName: paymentData.customerName,
          tier: paymentData.tier,
          mode: paymentData.mode
        }
      })

      if (!orderResponse.success) {
        throw new Error('Failed to create payment order')
      }

      // Process payment based on gateway
      let paymentResult
      if (paymentData.gateway === 'paypal') {
        paymentResult = await this.processPayPalPayment({
          ...paymentData,
          orderId: orderResponse.order.id
        })
      } else {
        // Default to Razorpay
        paymentResult = await this.processRazorpayPayment({
          ...paymentData,
          orderId: orderResponse.order.id
        })
      }

      return paymentResult
    } catch (error) {
      console.error('Payment processing failed:', error)
      throw error
    }
  }

  // Save enrollment data after successful payment
  saveEnrollment = async (enrollmentData) => {
    try {
      console.log('Saving enrollment:', enrollmentData)
      
      // In production, this would save to your backend
      // For now, we'll simulate success
      const mockSave = {
        success: true,
        enrollmentId: `ENR_${Date.now()}`,
        message: 'Enrollment saved successfully'
      }

      // In production, uncomment and use this:
      // const response = await axios.post(`${this.baseURL}/enrollment/save`, enrollmentData)
      // return response.data

      return mockSave
    } catch (error) {
      console.error('Failed to save enrollment:', error)
      throw new Error('Failed to save enrollment data')
    }
  }
}

// Export singleton instance
export default new PaymentService()